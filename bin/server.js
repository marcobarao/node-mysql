const bodyParser = require("body-parser");
const express = require("express");

const router = require("../src/routes/clientes.route");

const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/clientes", router);

app.listen(port, () => {
  console.log("Servidor escutando em http://localhost:3000");
  console.log("Para cancelar a execução CTRL + C");
});
