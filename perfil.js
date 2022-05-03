const express = require("express");
const axios = require('axios').default
const router = express.Router();
const LocalStorage = require('node-localstorage').LocalStorage
localStorage = new LocalStorage('./scratch');
const upload = require('./src/middlewares/multer')
const { uploadFile } = require('./src/middlewares/S3')


router.get("/perfil", verifica, (req, res) => {
    let usuario = localStorage.getItem("usuario")
    axios.post('http://localhost:3000/buscar-perfil', new URLSearchParams({
        'usuario': `${usuario}`
    })).then((response) => {
        console.log(response.data)
        res.render(
            'perfil', {
            layout: 'perfil',
            title: 'Perfil',
            perfil: response.data
        })
    }).catch((error) => {
        console.log(error);
    });
})

router.post("/cep-perfil", (req, res) => {
    let cep = req.body.cep
    correios.consultaCEP({ cep }).then(response => {
        console.log(response)
        res.json(response)
    })
})
router.post('/imagem-perfil', verifica, upload.single('image'), async (req, res) => {
    let avatar
    let usuario = localStorage.getItem("usuario")
    let size = req.file.originalname.length
    if (req.file) {
        if (req.file.originalname.match(/png/) || req.file.originalname.match(/jpg/)) {
            avatar = "user_" + usuario + req.file.originalname.substring(size - 4, size)
        } else {
            avatar = "user_" + usuario + req.file.originalname.substring(size - 5, size)
        }
        try {
            const result = await uploadFile(req.file)
            console.log("UPLAOD S3" + result)
        } catch (error) {
            console.log("ERRO:" + error)
        }
        res.send({ avatar: avatar })
    } else {
        res.send({ message: "Falha no Upload" })
    }
})
router.post('/atualizar-perfil', (req, res) => {
    let usuario = localStorage.getItem("usuario")
    axios.post('http://localhost:3000/atualizar-perfil', new URLSearchParams({
        'usuario': `${usuario}`,
        'telefone': `${req.body.telefone}`,
        'nome': `${req.body.nome}`,
        'nascimento': `${req.body.nascimento}`,
        'cep': `${req.body.cep}`,
        'estado': `${req.body.estado}`,
        'cidade': `${req.body.cidade}`,
        'bairro': `${req.body.bairro}`,
        'rua': `${req.body.rua}`,
        'numero': `${req.body.numero}`,
        'complemento': `${req.body.complemento}`,
        'path': `${req.body.path}`
    }))
})


module.exports = router;