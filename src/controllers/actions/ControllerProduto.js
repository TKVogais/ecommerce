const detalhes = document.getElementsByClassName("btn-delt")
const adicionar = document.getElementsByClassName("btn-shop")
for (let i in detalhes) {
    let item = document.getElementById("btn" + i)
    if (item) {
        item.addEventListener("click", (e) => {
            let data = e.target.parentNode.parentNode.getAttribute("produto")
            if (data) {
                window.location.href = `https://www.otakushopp.com/detalhes/${data}`
            }
        })

    }
}
for (let i in adicionar) {
    let item = document.getElementById("shop" + i)
    if (item) {
        item.addEventListener("click", (e) => {
            let idProduto = e.target.parentNode.parentNode.getAttribute("produto")
            let IdUsuario
            try {
                axios.get("https://www.otakushopp.com/usuario").then(({ data }) => {
                    IdUsuario = data.id
                    if (idProduto != "" || idProduto != undefined || idProduto || null) {
                        axios.post('https://www.api-otaku-shop.com.br/api/token', new URLSearchParams({
                            "id": `${data.id}`
                        }
                        )).then(({ data }) => {
                            if (data.state) {
                                axios.post('https://www.api-otaku-shop.com.br/api/addproduto', new URLSearchParams({
                                    "IdUsuario": `${IdUsuario}`,
                                    "IdProduto": `${idProduto}`,
                                    "Quant": 1,
                                    "Size": null
                                })).then((response) => {
                                    if (response.data.affectedRows == 1) {
                                        window.location.href = `https://www.otakushopp.com/carrinho`
                                    }
                                })
                            } else {
                                window.location.href = `https://www.otakushopp.com/acesso`
                            }
                        })
                    } else {
                        window.location.href = `https://www.otakushopp.com/acesso`
                    }
                })
            } catch (error) {
                console.log("Deu merda: " + error)
            }
        })

    }
}
