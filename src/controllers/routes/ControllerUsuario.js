const axios = require('axios').default
const url = process.env.NODE_URL_API
const acesso = async (req, res) => {
    res.render('acesso', { layout: 'acesso', title: "Acesso" })
}
const verificaToken = async (req, res, next) => {
    try {
        axios.get("http://localhost:8081/usuario").then(({ data }) => {
            if (data.id != "" || data.id != undefined || data.id || null) {
                axios.post(url + '/api/token', new URLSearchParams({
                    "id": `${data.id}`
                }
                )).then(({ data }) => {
                    if (data.state) {
                        next()
                    } else {
                        res.redirect("/acesso")
                    }
                })
            } else {
                res.redirect("/acesso")
            }
        })
    } catch (error) {
        res.redirect("/acesso")
    }
}

module.exports = {
    acesso,
    verificaToken
}