var database = require("../database/config");

function listarQtdVeiculos(idUsuario){
    var instrucao = `
    SELECT COUNT(idVeiculo) AS qtdVeiculo FROM veiculo
	INNER JOIN Usuario ON fkEmpresaVeiculo = idUsuario
	WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function ListarCaminhoes(idUsuario) {
    console.log("ACESSEI O TAREFA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucao = `
    SELECT 
    v.idVeiculo,
    v.Modelo,
    v.Placa,
    v.qtdSensor
    FROM veiculo v join usuario on fkEmpresaVeiculo = idUsuario   WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarQtdVeiculos,
    ListarCaminhoes,
}