import sequelize from "../utils/database.js";
import { DataTypes } from "sequelize";

const Cart = sequelize.define("cart", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
});

export default Cart;