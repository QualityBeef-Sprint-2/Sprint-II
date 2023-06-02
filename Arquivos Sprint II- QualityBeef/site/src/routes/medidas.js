var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idSetor", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idSetor", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});


router.get("/ultimas2/:idSetor", function (req, res) {
    medidaController.buscarUltimasMedidas2(req, res);
});

router.get("/tempo-real2/:idSetor", function (req, res) {
    medidaController.buscarMedidasEmTempoReal2(req, res);
});



router.get("/ultimas3/:idSetor", function (req, res) {
    medidaController.buscarUltimasMedidas3(req, res);
});

router.get("/tempo-real3/:idSetor", function (req, res) {
    medidaController.buscarMedidasEmTempoReal3(req, res);
});



router.get("/ultimas4/:idSetor", function (req, res) {
    medidaController.buscarUltimasMedidas4(req, res);
});

router.get("/tempo-real4/:idSetor", function (req, res) {
    medidaController.buscarMedidasEmTempoReal4(req, res);
});
module.exports = router;