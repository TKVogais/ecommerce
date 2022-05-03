EventoBotaoCadastrar()
EventoBotaoLogin()

function EventoBotaoLogin() {
    const BtnLogin = document.getElementById('login');
    BtnLogin.addEventListener('click', async () => {
        const usuario = document.getElementById('l_user').value;
        const senha = document.getElementById('l_pass').value;
        if (usuario && senha != "") {
            axios.post('http://52.67.15.249:3000/api/login', new URLSearchParams({
                'usuario': `${usuario}`,
                'senha': `${senha}`
            })).then((response) => {
                MessagemFeedBack(response.data)
                LocalStorageUsuario(response.data)
            }).catch((error) => {
                console.log(error);
            });
        }
    })
}
function EventoBotaoCadastrar() {
    const BtnCadastrar = document.getElementById('cadastro');
    BtnCadastrar.addEventListener('click', async () => {
        const usuario = document.getElementById('c_user').value;
        const senha = document.getElementById('c_pass').value;
        const csenha = document.getElementById('c_passc').value;
        const email = document.getElementById('c_email').value;
        if (usuario === "" || senha === "" || email === "") {
            MessagemFeedBack({ state: 401 })
        }
        else if (senha.length < 8) {
            MessagemFeedBack({ state: 402 })
        } else if (senha !== csenha) {
            MessagemFeedBack({ state: 403 })
        } else {
            axios.post('http://52.67.15.249:3000/api/cadastro', new URLSearchParams({
                'usuario': `${usuario}`,
                'senha': `${senha}`,
                'email': `${email}`
            })).then((response) => {
                MessagemFeedBack(response.data)
              
            }).catch((error) => {
                console.log(error);
            });
        }
    })
}

const MessagemFeedBack = ({ state }) => {
    let notificacao = document.getElementById('notificacao-' + state)
    notificacao.style.display = "flex"
    setTimeout(() => {
        notificacao.style.display = "none"
        switch (state) {
            case (200):
                window.location.replace("http://localhost:8081")
                break;
            case (201):
                document.getElementById('c_user').value = "";
                document.getElementById('c_pass').value = "";
                document.getElementById('c_passc').value = "";
                document.getElementById('c_email').value = "";
                ModoLogin();
                break;
        }
    }, 1200)
}


const LocalStorageUsuario = ({ id_usuario }) => {
    axios.put('http://localhost:8081/usuario', new URLSearchParams({
        'id': `${id_usuario}`
    }))
}