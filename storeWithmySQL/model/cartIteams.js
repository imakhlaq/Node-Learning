import sequelize from "../utils/database.js";
import { DataTypes } from "sequelize";

const CartItem = sequelize.define("cart", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default CartItem;
