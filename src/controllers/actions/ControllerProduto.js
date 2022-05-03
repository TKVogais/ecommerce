const detalhes = document.getElementsByClassName("btn-delt")
const adicionar = document.getElementsByClassName("btn-shop")
for (let i in detalhes) {
    let item = document.getElementById("btn" + i)
    if (item) {
        item.addEventListener("click", (e) => {
            let data = e.target.parentNode.parentNode.getAttribute("produto")
            console.log(data)
            if (data) {
                window.location.href = `http://localhost:8081/detalhes/${data}`
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
                axios.get("http://localhost:8081/usuario").then(({ data }) => {
                    IdUsuario = data.id
                    if (idProduto != "" || idProduto != undefined || idProduto || null) {
                        axios.post('http://52.67.15.249:3000/api/token', new URLSearchParams({
                            "id": `${data.id}`
                        }
                        )).then(({ data }) => {
                            if (data.state) {
                                axios.post('http://52.67.15.249:3000/api/addproduto', new URLSearchParams({
                                    "IdUsuario": `${IdUsuario}`,
                                    "IdProduto": `${idProduto}`,
                                    "Quant": 1,
                                    "Size": null
                                })).then((response) => {
                                    window.location.href = `http://localhost:8081/carrinho`
                                })
                            } else {
                                window.location.href = `http://localhost:8081/acesso`
                            }
                        })
                    } else {
                        window.location.href = `http://localhost:8081/acesso`
                    }
                })
            } catch (error) {
                console.log("Deu merda: " + error)
            }
        })

    }
}
