import fs from "fs";
import path from "path";
//for storing data
export const products = [{ title: "the book of nodes" }];

export class Product {
  constructor(item) {
    this.item = item;
  }
  save() {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    

    products.push({ title: this.item });
  }
  static fetchAll() {
    return products;
  }
}
