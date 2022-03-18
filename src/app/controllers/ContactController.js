class ContactController {
  index(req, res) {
    // Listar todos os registros
    res.send('Send from Contact Controller');
  }

  show() {
    // Obter um registro
  }

  store() {
    // Criar novo registro
  }

  update() {
    // Edit um registro
  }

  delete() {
    // Deletar um registro
  }
}

module.exports = new ContactController();
