import express from 'express';
import cors from 'cors';
import usersRoutes from './app/routes/users.js';
import connection from './app/models/db.js';

const app = express();

var corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/users', usersRoutes);

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Selamat datang di aplikasi' });
});

// app.get('/users', (req, res) => {
//   connection.getConnection((err, connection) => {
//     if (err) throw err; // not connected!
//     // Use the connection
//     connection.query('SELECT * FROM users', (error, results, fields) => {
//       // When done with the connection, release it.
//       connection.release();
//       // Handle error after the release.
//       if (error) throw error;
//       res.send(results);
//     });
//   });
// });

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}.`);
});
