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
                        axios.get("https://www.otakushopp.com/usuario").then(({
                            data
                        }) => {
                            const IdUsuario = data.id
                            if (IdUsuario) {
                                if (idProduto != "" || idProduto != undefined || idProduto || null) {
                                    axios.post('https://www.api-otaku-shop.com.br/api/token', new URLSearchParams({
                                        "id": `${data.id}`
                                    })).then(({
                                        data
                                    }) => {
                                        if (data.state) {
                                            axios.post('https://www.api-otaku-shop.com.br/api/addproduto', new URLSearchParams({
                                                "IdUsuario": `${IdUsuario}`,
                                                "IdProduto": `${idProduto}`,
                                                "Quant": `${Quantidade}`,
                                                "Size": `${Tamanho}`
                                            })).then((response) => {
                                                window.location.href = `https://www.otakushopp.com/carrinho`
                                            })
                                        } else {
                                            window.location.href = `https://www.otakushopp.com/acesso`
                                        }
                                    })
                                } else {
                                    window.location.href = `https://www.otakushopp.com/acesso`
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