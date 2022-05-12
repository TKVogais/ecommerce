const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
require('dotenv').config()


router.get('/ip', async (req, res) => {
    let response = await axios.get("http://meuip.com/api/meuip.php").then(({ data }) => {
        return data
    })
    res.json({
        ip: response
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