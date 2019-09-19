const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const calcPegadaCarbono = require('./calcPegadaCarbono')

//app.use(bodyParser.text())
//app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/pegadacarbono', (req, res) => {

    result = calcPegadaCarbono(
        req.body.energiaKwhMes,
        req.body.gasCozinhaKgMes,
        req.body.gasNaturalM3Mes,
        req.body.veicPGasolinaKmMes,
        req.body.veicMGasolinaKmMes,
        req.body.veicGGasolinaKmMes,
        req.body.motoGasolinaKmMes,
        req.body.veicPEtanolKmMes,
        req.body.veicMEtanolKmMes,
        req.body.veicGEtanolKmMes,
        req.body.motoEtanolKmMes,
        req.body.carroDieselKmMes,
        req.body.onibusDieselUrbanoKmMes,
        req.body.onibusDieselRodoviaKmMes,
        req.body.carroGnvKmMes,
        req.body.viagemNacionalKmMes,
        req.body.viagemInternacionalKmMes,
        req.body.aterroResiduosKgDia
    )
    res.send(result)
})



app.post('/corpo', (req, res) => {
    // let corpo = ''
    //req.on('data', function (parte) {
    //    corpo += parte
    // })

    // req.on('end', function () {
    //    res.json(corpo)
    //})

    res.send(req.body)

})

app.get('/', (req, res) => {
    res.send("<h1> API DO APS </h1>")
})


app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.get('/opa', (req, res) => {

    res.json({

        data: [
            { id: 1, name: 'Jose', position: 1 },
            { id: 34, name: 'Junior', position: 2 },
            { id: 80, name: 'Joice', position: 3 }
        ],
        count: 30,
        skip: 10,
        limit: 3,
        statys: 200
    })


    // res.json({
    //  name: "Iphone 11",
    //     price:  6000.00,
    //  discount: 0.12
    //})

    //res.send("Estou bem!")
})

app.listen(3000, () => {
    console.log('Iniciado')
})