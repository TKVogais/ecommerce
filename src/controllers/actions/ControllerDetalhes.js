AdicionarProduto()

function AdicionarProduto() {
    try {
        const BtnAdicionarProduto = document.getElementById('add-carrinho')
        if (BtnAdicionarProduto) {
            const Select = document.getElementById('size-option')
            let Tamanho
            const idProduto = BtnAdicionarProduto.getAttribute("name")
            BtnAdicionarProduto.addEventListener("click", () => {
                try {
                    Tamanho = Select.options[Select.selectedIndex].text
                } catch (error) {
                    Tamanho = 'null'
                }
                const Quantidade = document.getElementById('product-qtde').value
                if (Tamanho != "Selecione o tamanho") {
                    try {
                        axios.get("http://localhost:8081/usuario").then(({
                            data
                        }) => {
                            const IdUsuario = data.id
                            if (IdUsuario) {
                                if (idProduto != "" || idProduto != undefined || idProduto || null) {
                                    axios.post('http://54.94.24.245:3000/api/token', new URLSearchParams({
                                        "id": `${data.id}`
                                    })).then(({
                                        data
                                    }) => {
                                        if (data.state) {
                                            axios.post('http://54.94.24.245:3000/api/addproduto', new URLSearchParams({
                                                "IdUsuario": `${IdUsuario}`,
                                                "IdProduto": `${idProduto}`,
                                                "Quant": `${Quantidade}`,
                                                "Size": `${Tamanho}`
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
                            }
                        })
                    } catch (error) {
                        console.log("Deu merda: " + error)
                    }
                }
            })
        }
    } catch (error) {
        console.log(error)
    }
}