import path from "path";
import { readFile, writeFile } from "fs/promises";

//for storing data
const __dirname = path.resolve();

const p = path.join(__dirname, "data", "cart.json");

export class Cart {

    static async addProduct(id){

        let cart=[];

        try{
            cart= await readFile(p);

        }catch(err){

        }
    }
}
