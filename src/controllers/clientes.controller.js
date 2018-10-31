const conn = require("../../bin/connection");

module.exports = {
  index(req, res) {
    conn(`SELECT * FROM Clientes`, [], res);
  },
  show(req, res) {
    const id = parseInt(req.params.id);
    conn(`SELECT * FROM Clientes WHERE id=?`, [id], res);
  },
  create(req, res) {
    const nome = req.body.nome.substring(0, 150);
    const cpf = req.body.cpf.substring(0, 11);
    conn(`INSERT INTO Clientes(Nome, Cpf) VALUES (?, ?)`, [nome, cpf], res);
  },
  update(req, res) {
    const id = parseInt(req.params.id);
    const nome = req.body.nome.substring(0, 150);
    const cpf = req.body.cpf.substring(0, 11);
    conn(`UPDATE Clientes SET Nome=?, CPF=? WHERE id=?`, [nome, cpf, id], res);
  },
  destroy(req, res) {
    const id = parseInt(req.params.id);
    conn(`DELETE FROM Clientes WHERE id=?`, [id], res);
  }
};
