function calcPegadaCarbono(energiaKwhMes,
    gasCozinhaKgMes,
    gasNaturalM3Mes,
    veicPGasolinaKmMes,
    veicMGasolinaKmMes,
    veicGGasolinaKmMes,
    motoGasolinaKmMes,
    veicPEtanolKmMes,
    veicMEtanolKmMes,
    veicGEtanolKmMes,
    motoEtanolKmMes,
    carroDieselKmMes,
    onibusDieselUrbanoKmMes,
    onibusDieselRodoviaKmMes,
    carroGnvKmMes,
    viagemNacionalKmMes,
    viagemInternacionalKmMes,
    aterroResiduosKgDia) {

    let TotalEmissaoTonCO2 = parseFloat(
        energiaKwhMes * 0.295 +
        gasCozinhaKgMes * 35.893 +
        gasNaturalM3Mes * 22.674 +
        veicPGasolinaKmMes * 2.184 +
        veicMGasolinaKmMes * 2.579 +
        veicGGasolinaKmMes * 3.571 +
        motoGasolinaKmMes * 1.268 +
        veicPEtanolKmMes * 0.7190001 +
        veicMEtanolKmMes * 0.7190001 +
        veicGEtanolKmMes * 0.7190001 +
        motoEtanolKmMes * 0.7190001 +
        carroDieselKmMes * 3.091 +
        onibusDieselUrbanoKmMes * 2.28 +
        onibusDieselRodoviaKmMes * 0.6 +
        carroGnvKmMes * 3.128 +
        viagemNacionalKmMes * 0.100188 +
        viagemInternacionalKmMes * 0.112465 +
        aterroResiduosKgDia * 963.6
    )

    return {


        energiaKwhMes: energiaKwhMes * 0.295,
        gasCozinhaKgMes: gasCozinhaKgMes * 35.893,
        gasNaturalM3Mes: gasNaturalM3Mes * 22.674,
        veicPGasolinaKmMes: veicPGasolinaKmMes * 2.184 ,
        veicMGasolinaKmMes: veicMGasolinaKmMes * 2.579,
        veicGGasolinaKmMes: veicGGasolinaKmMes * 3.571,
        motoGasolinaKmMes: motoGasolinaKmMes * 1.268,
        veicPEtanolKmMes: veicPEtanolKmMes * 0.7190001,
        veicMEtanolKmMes: veicMEtanolKmMes * 0.7190001,
        veicGEtanolKmMes: veicGEtanolKmMes * 0.7190001,
        motoEtanolKmMes:  motoEtanolKmMes * 0.7190001,
        carroDieselKmMes: carroDieselKmMes * 3.091,
        onibusDieselUrbanoKmMes: onibusDieselUrbanoKmMes * 2.28,
        onibusDieselRodoviaKmMes: onibusDieselRodoviaKmMes * 0.6,
        carroGnvKmMes:  carroGnvKmMes * 3.128,
        viagemNacionalKmMes: viagemNacionalKmMes * 0.100188,
        viagemInternacionalKmMes: viagemInternacionalKmMes * 0.112465,
        aterroResiduosKgDia: aterroResiduosKgDia * 963.6,

        TotalEmissaoTonCO2: TotalEmissaoTonCO2
        
        //energiaKwhMes: energiaKwhMes,
        //gasCozinhaKgMes: gasCozinhaKgMes,
        //gasNaturalM3Mes: gasNaturalM3Mes,
        //veicPGasolinaKmMes: veicPGasolinaKmMes ,
        //veicMGasolinaKmMes: veicMGasolinaKmMes,
        //veicGGasolinaKmMes: veicGGasolinaKmMes,
        //motoGasolinaKmMes: motoGasolinaKmMes,
        //veicPEtanolKmMes: veicPEtanolKmMes,
        //veicMEtanolKmMes: veicMEtanolKmMes,
        //veicGEtanolKmMes: veicGEtanolKmMes,
        //motoEtanolKmMes: motoEtanolKmMes,
        //carroDieselKmMes: carroDieselKmMes,
        //onibusDieselUrbanoKmMes: onibusDieselUrbanoKmMes,
        //onibusDieselRodoviaKmMes: onibusDieselRodoviaKmMes,
        //carroGnvKmMes: carroGnvKmMes,
        //viagemNacionalKmMes: viagemNacionalKmMes,
        //viagemInternacionalKmMes: viagemInternacionalKmMes,
        //aterroResiduosKgDia:aterroResiduosKgDia,
    }
}


module.exports = calcPegadaCarbono