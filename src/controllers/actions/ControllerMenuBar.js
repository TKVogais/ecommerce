const BtnHome = document.getElementById('menu-home')
const BtnProdutos = document.getElementById('menu-produtos')
const BtnPerfil = document.getElementById('menu-perfil')
const BtnCarrinho = document.getElementById('menu-carrinho')


if (BtnHome) {
    BtnHome.addEventListener("click", () => {
        window.location.replace("https://www.otakushopp.com/")
    })
}
if (BtnProdutos) {
    BtnProdutos.addEventListener("click", () => {
        window.location.href = "https://www.otakushopp.com/produtos"
    })
}
if (BtnPerfil) {
    BtnPerfil.addEventListener("click", () => {
        let Key = localStorage.getItem("key")
        window.location.href = `https://www.otakushopp.com/perfil/${Key}`
    })
}
if (BtnCarrinho) {
    BtnProdutos.addEventListener("click", () => {
        let Key = localStorage.getItem("key")
        window.location.href = `https://www.otakushopp.com/carrinho/${Key}`
    })
}