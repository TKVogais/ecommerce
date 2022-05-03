const ControllerProdutos = require('../controllers/routes/ControllerProduto')
const express = require("express");
const router = express.Router();

router.get("/",             ControllerProdutos.buscarDestaques)
router.get("/detalhes/:id", ControllerProdutos.buscarDetalhes )
router.get("/produtos",     ControllerProdutos.buscarProdutos )

module.exports = router;