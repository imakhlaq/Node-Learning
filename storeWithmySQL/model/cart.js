import sequelize from "../utils/database";
import { DataType, DataTypes } from "sequelize";

const Cart = sequelize.define("cart", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  qty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Cart;
