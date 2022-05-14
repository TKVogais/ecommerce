const BtnHome = document.getElementById('menu-home')
const BtnProdutos = document.getElementById('menu-produtos')
const BtnPerfil = document.getElementById('menu-perfil')
const BtnCarrinho = document.getElementById('menu-carrinho')


if (BtnHome) {
    BtnHome.addEventListener("click", () => {
        window.location.replace("https://www.otakushopp.com/")
    })
    BtnProdutos.addEventListener("click", () => {
        window.location.href = "https://www.otakushopp.com/produtos"
    })
    BtnPerfil.addEventListener("click", () => {
        let Key = localStorage.getItem("key")
        window.location.href = `https://www.otakushopp.com/perfil/${Key}`
    })
    BtnCarrinho.addEventListener("click", () => {
        let Key = localStorage.getItem("key")
        window.location.href = `https://www.otakushopp.com/carrinho/${Key}`
    })
}