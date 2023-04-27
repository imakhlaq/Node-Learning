import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "shop",
  password: "sBCA",
});

export default pool.promise();
