require('dotenv').config()
const axios = require('axios').default
const url = process.env.NODE_URL_API
const urlhost = process.env.NODE_URL_HOST

const buscarPerfil = async (req, res) => {
    console.log("PERFIL")
    let { data } = await axios.get(urlhost + "/usuario")
    axios.post(url + "/api/perfil", { id: data.id }).then(
        ({ data }) => {
            console.log(data)
            res.render('perfil', {
                title: "Perfil",
                perfil: data,
                layout: 'perfil'
            })
        }
    )
}

module.exports = { buscarPerfil }