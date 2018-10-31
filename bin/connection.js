const mysql = require("mysql");

module.exports = (query, data = [], res) => {
  const connection = mysql.createConnection({
    host: "host",
    port: ####,
    user: "user",
    password: "password",
    database: "database"
  });

  connection.query(query, data, (error, results, fields) => {
    if (error) res.json(error);
    else res.json(results);
    connection.end();
  });
};
