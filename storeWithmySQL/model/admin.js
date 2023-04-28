import path from "path";
import { readFile, writeFile } from "fs/promises";
import Cart from "./cart.js";

const __dirname = path.resolve();

const p = path.join(__dirname, "data", "products.json");

export class Admin {
  static async editProduct(id, data) {
    let fileContent;
    let products;
    try {
      fileContent = await readFile(p);
    } catch (err) {
      console.log(err);
    } finally {
      products = JSON.parse(fileContent);

      const prods = products.map((prod) => {
        if (prod.id == id) {
          return { ...prod, ...data };
        }
        return prod;
      });

      await writeFile(p, JSON.stringify(prods));
    }
  }

  static async deleteProduct(id) {
    let fileContent;
    let products;
    try {
      fileContent = await readFile(p);
    } catch (err) {
      console.log(err);
    } finally {
      products = JSON.parse(fileContent);

      const prod = products.filter((prod) => prod.id != id);
      const price = products.reduce((acc, prod) => {
        if (prod.id == id) {
          return (acc = prod.price);
        }
      }, 0);

      await writeFile(p, JSON.stringify(prod));

      //also delete from the cart
      Cart.deleteFromCart(id, price);
    }
  }
}
