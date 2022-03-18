const { v4 } = require('uuid');

const db = require('../../database');

let contacts = [
  {
    id: v4(),
    name: 'Lucas',
    email: 'lucas@email.com',
    phone: '333333333',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Mateus',
    email: 'mateus@email.com',
    phone: '44444444',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Jose',
    email: 'jose@email.com',
    phone: '55555555',
    category_id: v4(),
  },
];

class ContactsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`SELECT * from contacts ORDER BY name ${direction}`);

    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * from contacts WHERE id = $1', [id]);

    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * from contacts WHERE email = $1', [email]);

    return row;
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
      INSERT INTO
        contacts (name, email, phone, category_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  }

  async update(id, {
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(
      `
      UPDATE
        contacts
      SET
        name = $1,
        email = $2,
        phone = $3,
        category_id = $4
      WHERE id = $5
      RETURNING *`,
      [name, email, phone, category_id, id],
    );

    return row;
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
