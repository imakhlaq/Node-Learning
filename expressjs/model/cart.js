import path from "path";
import { readFile, writeFile } from "fs/promises";

//for storing data
const __dirname = path.resolve();

const p = path.join(__dirname, "data", "cart.json");

export class Cart {
  static async addProduct(id, price) {
    let cart = { products: [], totalPrice: 0 };

    try {
      const fileContent = await readFile(p);
      cart = JSON.parse(fileContent);
    } catch (err) {
      console.log(err);
    } finally {
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
  static async deleteFromCart(id, numberOfItems = 0) {
    try {
      const fileContent = await readFile(p);
      const cart = JSON.parse(fileContent);

      const updatedCart = cart.products.filter((prod) => {
        if (prod.id === id && numberOfItems == 0) {
          return false;
        } else {
          prod.qty--;
        }

        return prod;
      });

      const newData = { products: updatedCart, totalPrice: cart.totalPrice };

      await writeFile(p, JSON.stringify(newData));
    } catch (err) {
      console.log(err);
    }
  }
}
