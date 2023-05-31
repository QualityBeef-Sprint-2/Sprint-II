var metricasModel = require("../models/metricasModel");

function listarQtdVeiculos(req, res){
    var idUsuario = req.params.idUsuario;

    metricasModel.listarQtdVeiculos(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a quantidade de tarefas: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}


function ListarCaminhoes(req, res) {
    var idUsuario = req.params.idUsuario;

    metricasModel.ListarCaminhoes(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}



function buscarMedidasEmTempoReal(req, res) {

    var idCaminhao = req.params.idCaminhao;

    console.log(`Recuperando medidas em tempo real`);

    metricasModel.buscarMedidasEmTempoReal(idCaminhao).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listarQtdVeiculos,
    ListarCaminhoes,
    buscarMedidasEmTempoReal,
}