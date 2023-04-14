import fs from "fs";
import path from "path";

import { createRequire } from "module";
const require = createRequire(import.meta.url);

//for storing data
const __dirname = path.resolve();
//creating file
const p = path.join(__dirname, "data", "products.json");

export class Product {
  constructor(item) {
    this.item = item;
  }
  save() {
    fs.readFile(p, (err, fileContent) => {
      let products = [];

      //if their is no error the retriving data from file
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push({ title: this.item });

      //saving in file
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll() {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return [];
      }

      return JSON.parse(fileContent);
    });
  }
}
