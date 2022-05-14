const BtnCar = document.getElementById('carrinho-perfil')

if (BtnCar) {
    BtnCar.addEventListener("click", () => {
        const Key = localStorage.getItem("key")
        window.location.href = `https://www.otakushopp.com/carrinho/${Key}`
    })
}