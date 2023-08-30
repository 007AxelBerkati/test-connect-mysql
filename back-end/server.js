import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import usersRoutes from './app/routes/users.js';

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use('/users', usersRoutes);

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Selamat datang di aplikasi' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}.`);
});
