const ControllerPerfil = require('../controllers/routes/ControllerPerfil')
const { verificaToken } = require('../controllers/routes/ControllerUsuario')
const express = require("express");
const router = express.Router();


router.get('/perfil', verificaToken, ControllerPerfil.buscarPerfil);



module.exports = router