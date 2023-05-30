var express = require("express");
var router = express.Router();

var metricasController = require("../controllers/metricasController");

router.get("/listarQtdVeiculos/:idUsuario", function (req, res) {
    metricasController.listarQtdVeiculos(req, res);
});

router.get("/ListarCaminhoes/:idUsuario", function (req, res) {
    metricasController.ListarCaminhoes(req, res);
});


module.exports = router;