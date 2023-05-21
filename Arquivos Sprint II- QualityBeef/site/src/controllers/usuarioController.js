var usuarioModel = require("../models/usuarioModel");

var sessoes = [];



function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var token = req.body.tokenServer;
    var nome = req.body.nomeServer;
    var cnpj = req.body.cnpjServer;
    var cep = req.body.cepServer;
    var telefone = req.body.telefoneServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    }else if (token == undefined) {
        res.status(400).send("Seu token está undefined!");
    }else{
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(token, nome, cnpj, cep, telefone)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function cadastrarUsuario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastroUsuario.html
    var nome = req.body.nomeUsuarioServer;
    var sobrenome = req.body.sobrenomeServer;
    var cpf = req.body.cpfServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var fktoken = req.body.fktokenServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Seu sobrenome está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu cpf está undefined!");
    }else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    }else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }else if (fktoken == undefined) {
        res.status(400).send("Seu token está undefined!");
    }else{

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarUsuario(nome, sobrenome, cpf, email, senha, fktoken)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarFuncionario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastroUsuario.html
    var nome = req.body.nomeUsuarioServer;
    var sobrenome = req.body.sobrenomeServer;
    var cpf = req.body.cpfServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var fktoken = req.body.fktokenServer;
    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Seu sobrenome está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu cpf está undefined!");
    }else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    }else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }else if (fktoken == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }else{

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarFuncionario(nome, sobrenome, cpf, email, senha, fktoken)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarVeiculo(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastroUsuario.html
    var modelo = req.body.modeloServer;
    var placa = req.body.placaServer;
    var sensor = req.body.sensorServer;
    var token = req.body.tokenServer;

    // Faça as validações dos valores
    if (modelo == undefined) {
        res.status(400).send("Seu modelo está undefined!");
    } else if (placa == undefined) {
        res.status(400).send("Seu placa está undefined!");
    } else if (sensor == undefined) {
        res.status(400).send("Seu sensor está undefined!");
    }else if (token == undefined) {
        res.status(400).send("Seu token está undefined!");
    }else{

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarVeiculo(modelo, placa, token, sensor)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarMotorista(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastroUsuario.html
    var nome = req.body.nomeUsuarioServer;
    var sobrenome = req.body.sobrenomeServer;
    var cnh = req.body.cnhServer;
    var telefone = req.body.telefoneServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu modelo está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Seu placa está undefined!");
    } else if (cnh == undefined) {
        res.status(400).send("Seu sensor está undefined!");
    }else if (telefone == undefined) {
        res.status(400).send("Seu token está undefined!");
    }else{

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarMotorista(nome, sobrenome, cnh, telefone)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    entrar,
    cadastrar,
    cadastrarUsuario,
    cadastrarFuncionario,
    cadastrarVeiculo,
    cadastrarMotorista,
    listar
}