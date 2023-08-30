import sql from './db.js';

// constructor
const Users = function (user) {
  this.email = user.email;
  this.password = user.password;
};

Users.getAll = (result) => {
  sql.query('SELECT * FROM users', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }
    console.log('users: ', res);
    result(null, res);
  });
};

export default Users;
