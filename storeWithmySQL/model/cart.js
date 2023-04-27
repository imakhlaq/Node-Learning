import path from "path";
import { readFile, writeFile } from "fs/promises";

//for storing data
const __dirname = path.resolve();

const p = path.join(__dirname, "data", "cart.json");

export class Cart {
  static async getCart() {
    const fileContent = await readFile(p);
    const cart = JSON.parse(fileContent);
    return cart;
  }

  static async addProduct(id, price) {
    let cart = { products: [], totalPrice: 0 };

    try {
      cart = await this.getCart();
    } catch (err) {
      console.log(err);
    } finally {
      console.log(cart);
      //finding the index
      const existingIndex = cart.products.findIndex((pro) => pro.id === id);

      if (existingIndex >= 0) {
        let { qty } = cart.products[existingIndex];
        qty++;
        cart.products[existingIndex] = { ...cart.products[existingIndex], qty };
      } else {
        cart.products.push({ id, qty: 1 });
      }
      cart.totalPrice += +price;

      //writing back in the file
      await writeFile(p, JSON.stringify(cart));
    }
  }

  static async deleteFromCart(id, price, numberOfItems = 0) {
    try {
      const cart = await this.getCart();

      let qty;

      const updatedCart = cart.products.filter((prod) => {
        if (prod.id === id && numberOfItems == 0) {
          qty = prod.qty;
          return false;
        } else if (prod.id === id) {
          qty = prod.qty;
          prod.qty--;
        }

        return prod;
      });

      if (!qty) {
        return;
      }

      const totalPrice = cart.totalPrice - price * qty;

      const newData = { products: updatedCart, totalPrice };

      await writeFile(p, JSON.stringify(newData));
    } catch (err) {
      console.log(err);
      return;
    }
  }
}
