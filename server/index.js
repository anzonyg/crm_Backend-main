const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

/* mongoose.connect('mongodb://127.0.0.1:27017/crmDB')
  .then(db => console.log('DB conected' + db))
  .catch(err => console.error(err)); */

const MONGO_URI = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_PUBLIC_URL}:${process.env.MONGO_PORT_PUBLIC}/${process.env.MONGO_DB}?authSource=admin`;

mongoose.connect(MONGO_URI)
  .then(db => console.log('DB connected'))
  .catch(err => console.error(err));

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('tiny'));
app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true, parameterLimit: 100000 }));

// Router
app.get('', async (req, res) => {
  console.log(process.env.environment + 2);
  res.json("Inicio de servidor con éxito!");
});

// Router Program
app.use('/tasks', require('./routes/tasks'));

// **Aquí añades las rutas para servir los archivos estáticos del frontend de React**
const path = require('path');

// Sirve los archivos estáticos del build de React
app.use(express.static(path.join(__dirname, 'client/build')));

// Maneja todas las rutas no especificadas para redirigir al frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// Server listening
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
  console.log("ENV SYSTEM", process.env.environment)
});
