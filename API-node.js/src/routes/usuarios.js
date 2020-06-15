const express = require('express')
const router = express.Router();

const usuariosController = require('../controllers/usuariosController');

router.get('/', usuariosController.list);
router.post('/agregar', usuariosController.agregar);

router.get('/borrar/:id', usuariosController.borrar);
router.get('/editar/:id', usuariosController.editar);

router.post('/editar/:id', usuariosController.actualizar);

module.exports = router;