import User from '../models/users.model.js';

// Retrieve all users from the database.
export const findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: 'errrrrr' || 'Terjadi kesalahan saat mengambil data.',
      });
    } else {
      res.send(data);
    }
  });
};
