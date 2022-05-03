require('dotenv').config()
const axios = require('axios').default
const url = process.env.NODE_URL_API
const urlhost = process.env.NODE_URL_HOST

const buscarCarrinho = async (req, res) => {
    let {data} = await axios.get(urlhost+"/usuario")
    axios.post(url + "/api/carrinho", { id: data.id }).then(
        (response) => {
            res.render('carrinho', {
                title: "Carrinho",
                carrinho: response.data,    
                layout: 'carrinho'
            })
        }
    )
}


module.exports = { buscarCarrinho }