const ControllerPerfil = require('../controllers/routes/ControllerPerfil')
const { verificaToken } = require('../controllers/routes/ControllerUsuario')
const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer()

router.get('/perfil', verificaToken, ControllerPerfil.buscarPerfil);
router.post('/upload-perfil', upload.single('image'), ControllerPerfil.atualizarPerfil)


module.exports = router