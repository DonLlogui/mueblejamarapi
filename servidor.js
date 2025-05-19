const express = require('express');
const cors = require('cors');
const rutacliente = require('./vista/ClientesRuta');
//const path = require('path');
const app = express();
<<<<<<< HEAD
const PORT = process.env.PORT || 2222;
=======
const PORT = process.env.PORT || 3333;
>>>>>>> 1940c0cefbf6091c49622843967090284db46e59

// Middleware
app.use(cors({
    origin: '*', // Cambiar ['http://tu.com', 'http://yo.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
    credentials: true // Habilita el envío de credenciales si es necesario
  }));

  // Middleware para parseo de solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public')));

// Rutas 
app.use('/', rutacliente);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });