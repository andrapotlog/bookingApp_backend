const mysql = require("mysql2");

const db_connection = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    database: "tema1_egov",
    password: "1234",
    port: "3306",
  })
  .on("error", (err) => {
    console.log("Failed to connect to Database - ", err);
  });

module.exports = db_connection;
