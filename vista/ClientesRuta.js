const express = require('express');
const CRutas = require('../controlador/ClienteControlador');
<<<<<<< HEAD
const LRutas = require('../controlador/LoginClienteControlador');
const router = express.Router();

router.post('/usuarios', CRutas.crearCliente);
router.post('/login', LRutas.validarCredencial);
=======
const LCRutas = require('../controlador/LoginClienteControlador');
const router = express.Router();

router.post('/cliente', CRutas.crearCliente);
router.post('/login', LCRutas.validarCredencial);

>>>>>>> 1940c0cefbf6091c49622843967090284db46e59
module.exports = router; 