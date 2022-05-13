const express = require("express");
const router = express.Router();
require('dotenv').config()

router.get('/url', async (req, res) => {
    const urlApi = process.env.NODE_URL_API
    const urlHost = process.env.NODE_URL_HOST
    res.json({
        urlApi: urlApi,
        urlHost: urlHost
    })
})

router.get('/teste', async (req, res) => {
    const key = localStorage.getItem("key")
    console.log(key)
})

module.exports = router;