// import mysql from "mysql2";

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "shop",
//   password: "sBCA",
// });

// export default pool.promise();

//new way with OREM

import { Sequelize } from "sequelize";

const sequelize = new Sequelize("shop", "root", "sBCA", {
  dialect: "mysql",
  host: "localhost",
});

export default sequelize;
