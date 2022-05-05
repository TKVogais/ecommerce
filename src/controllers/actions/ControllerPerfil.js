AlterarFotoPerfil()
Logout()
BuscarInformacoesComCep()
EventoInputTelefone()
AtualizarPerfil()

function AlterarFotoPerfil() {
    const img = document.querySelector('[name=file]')
    if (img) {
        img.addEventListener('change', e => {
            let file = e.target.files[0]
            let fileReader = new FileReader()
            fileReader.onloadend = () => {
                document.querySelector('#image').setAttribute('src', fileReader.result)
            }
            fileReader.readAsDataURL(file)
        })
    }
}

function Logout() {
    const BtnLogout = document.getElementById("logout")
    if (BtnLogout) {
        BtnLogout.addEventListener('click', () => {
            axios.get("http://localhost:8081/usuario").then(({
                data
            }) => {
                axios.post('http://54.94.24.245:3000/api/logout', new URLSearchParams({
                    'id': data.id,
                })).then((response) => {
                    window.location.replace("http://localhost:8081")
                }).catch((error) => {
                    console.log(error)
                });
            })
        })
    }
}

function BuscarInformacoesComCep() {
    const Cep = document.getElementById('cep')
    if (Cep) {
        Cep.addEventListener('keypress', () => {
            if (Cep.value.length == 5) {
                Cep.value += "-"
            }
        })
        Cep.addEventListener('focusout', () => {
            try {
                if (Cep.value.length === 9) {
                    axios.get(`https://viacep.com.br/ws/${Cep.value}/json/`).then((response) => {
                        const auto = document.getElementsByClassName('auto');
                        for (let i = 0; i < auto.length; i++) {
                            switch (auto[i].name) {
                                case 'estado':
                                    auto[i].value = response.data.uf
                                    break;
                                case 'cidade':
                                    auto[i].value = response.data.localidade
                                    break;
                                case 'bairro':
                                    auto[i].value = response.data.bairro
                                    break;
                                case 'rua':
                                    auto[i].value = response.data.logradouro
                                    break;
                            }
                        }
                    }).catch((error) => {
                        console.log(error);
                    });
                }
            } catch (error) {

            }
        })
    }
}

function EventoInputTelefone() {
    const Telefone = document.getElementById('telefone')
    if (Telefone) {
        Telefone.addEventListener('keypress', () => {
            switch (Telefone.value.length) {
                case 2:
                    let string = Telefone.value.replace(/[^a-zA-Z0-9]/g, '')
                    Telefone.value = "(" + string + ") "
                    break;
                case 6:
                    Telefone.value += " "
                    break;
                case 11:
                    Telefone.value += "-"
                    break;
            }
        })
    }
}

function AtualizarPerfil() {
    const BtnPerfil = document.getElementById('save-perfil')
    if (BtnPerfil) {
        BtnPerfil.addEventListener('click', async () => {
            const {
                nome,
                usuario,
                email,
                nascimento,
                telefone,
                cep,
                estado,
                cidade,
                bairro,
                rua,
                numero,
                complemento
            } = document.getElementsByClassName('input-perfil');
            let Image = document.querySelector('[name=file]')
            let formData = new FormData()
            formData.append('image', Image.files[0])
            formData.append('Nome', nome.value)
            formData.append('Usuario', usuario.value)
            formData.append('Email', email.value)
            formData.append('Nascimento', nascimento.value)
            formData.append('Telefone', telefone.value)
            formData.append('Cep', cep.value)
            formData.append('Estado', estado.value)
            formData.append('Cidade', cidade.value)
            formData.append('Bairro', bairro.value)
            formData.append('Rua', rua.value)
            formData.append('Numero', numero.value)
            formData.append('Complemento', complemento.value)
            axios.get("http://localhost:8081/usuario").then(({
                data
            }) => {
                formData.append('Id', data.id)
                axios.post('http://52.67.15.249:3000/api/up-perfil', formData).then(({
                    data
                }) => {
                    console.log(data)
                }).catch((error) => {
                    console.log(error)
                });
            })

        })
    }
}