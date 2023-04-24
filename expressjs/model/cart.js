import path from "path";
import { readFile, writeFile } from "fs/promises";

//for storing data
const __dirname = path.resolve();

const p = path.join(__dirname, "data", "cart.json");

export class Cart {
  static async addProduct(id) {
    let cart = { products: [], totalPrice: 0 };

    try {
      const fileContent = await readFile(p);
      cart = JSON.parse(fileContent);
    } catch (err) {
      console.log(err);
    } finally {
      cart.products.forEach((pro) => {
        if (pro.id === id) {
          pro.quantity++;
        }
      });

      //writing back in the file
      await writeFile(p, JSON.stringify(cart));
    }
  }
}
