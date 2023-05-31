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

function buscarMedidasEmTempoReal(idCaminhao) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idCaminhao} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select area1 as temperatura, momento,
        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico,
        fkSetor from medida where fkSetor = ${idCaminhao} ORDER BY momento_grafico DESC LIMIT 1;`
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}   

module.exports = {
    listarQtdVeiculos,
    ListarCaminhoes,
    buscarMedidasEmTempoReal,
}