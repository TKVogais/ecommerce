const axios = require('axios').default
const url = process.env.NODE_URL_API
const acesso = async (req, res) => {
    res.render('acesso', { layout: 'acesso', title: "Acesso" })
}
const verificaToken = async (req, res, next) => {
    try {
        const key = localStorage.getItem('key')
        console.log("ID: " + key)
        if (key != "" || key != undefined || key || null) {
            axios.post(url + '/api/token', new URLSearchParams({
                "id": `${key}`
            }
            )).then(({ data }) => {
                if (data.state) {
                    next()
                } else {
                    res.redirect("/acesso", { data: key })
                }
            })
        } else {
            res.redirect("/acesso", { data: key })
        }
    } catch (error) {
        res.redirect("/acesso")
    }
}

module.exports = {
    acesso,
    verificaToken
}