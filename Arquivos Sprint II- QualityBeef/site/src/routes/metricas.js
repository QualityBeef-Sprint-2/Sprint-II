var express = require("express");
var router = express.Router();

var metricasController = require("../controllers/metricasController");

router.get("/listarQtdVeiculos/:idUsuario", function (req, res) {
    metricasController.listarQtdVeiculos(req, res);
});

router.get("/ListarCaminhoes/:idUsuario", function (req, res) {
    metricasController.ListarCaminhoes(req, res);
});

router.get("/tempo-real/:idCaminhao", function (req, res) {
    metricasController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;