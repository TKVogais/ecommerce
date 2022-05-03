const { Router } = require("express");
const express = require("express");
const router = express.Router();
const LocalStorage = require('node-localstorage').LocalStorage
localStorage = new LocalStorage('../scrath');
require('dotenv').config()


router.put('/usuario', async (req, res) => {
    localStorage.setItem("usuario", req.body.id)
    if (localStorage.getItem("usuario")) {
        res.json({
            state: 200,
            message: "Usuário atualizado"
        })
    } else {
        res.json({
            state: 404,
            message: "Houve algum problema"
        })
    }
})

router.get('/usuario', async (req, res) => {
    let id = localStorage.getItem("usuario")
    res.json({
        id: id
    })
})

router.get('/url', async (req, res) => {
    const urlApi = process.env.NODE_URL_API
    const urlHost = process.env.NODE_URL_HOST
    res.json({
        urlApi: urlApi,
        urlHost: urlHost
    })
})

module.exports = router;