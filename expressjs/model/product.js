import path from "path";
import { readFile, writeFile } from "fs/promises";

//for storing data
const __dirname = path.resolve();
//creating file
const p = path.join(__dirname, "data", "products.json");

export class Product {
  constructor(details) {
    // this.title = details.title;
    // this.price = details.price;
    // this.imageUrl = details.imageUrl;
    // this.description = details.description;
    this.details = { ...details };
  }
  async save() {
    let products = [];

    try {
      products = await readFile(p);
      //if their is no error the retrieving data from file
      products = JSON.parse(products);
    } catch (err) {
      console.log(err);
    } finally {
      console.log(this.details);
      products.push(this.details);
    }

    //saving in file
    try {
      writeFile(p, JSON.stringify(products));
    } catch (err) {
      console.log(err);
    }
  }
  static async fetchAll() {
    let fileContent;
    try {
      fileContent = await readFile(p);
    } catch (err) {
      return [];
    }
    return JSON.parse(fileContent);
  }
}
