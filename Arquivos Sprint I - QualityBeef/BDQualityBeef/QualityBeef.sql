CREATE DATABASE sprintsp;
USE sprintsp;

CREATE TABLE Cadastro (
	idCadastro INT PRIMARY KEY AUTO_INCREMENT,
    CNPJ CHAR(18),
    NomeEmpresa VARCHAR(40),
    EmailEmpresa VARCHAR(40),
    SenhaEmpresa VARCHAR(16),
    CidadeEmpresa VARCHAR(60),
    EstadoEmpresa VARCHAR(40),
    UFEmpresa CHAR(2),
    NumTel VARCHAR(15)
);

CREATE TABLE Caminhao (
	idCaminhao INT PRIMARY KEY AUTO_INCREMENT,
    ModeloCaminhao VARCHAR(50),
    Placa VARCHAR(9),
    Motorista VARCHAR(50),
    RotaSaida VARCHAR(80),
    UFRotaSaida CHAR(2),
    RotaDestino VARCHAR(80),
    UFRotaDestino CHAR(2)
);

CREATE TABLE Metrica (
	idMetrica INT PRIMARY KEY AUTO_INCREMENT,
    TempReal FLOAT,
    DataTemp DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Sensor (
	idSensor INT PRIMARY KEY AUTO_INCREMENT,
    TipoSensor VARCHAR(40),
    ModeloSensor VARCHAR(40),
    StatusSensor VARCHAR(50),
    ObsSensor VARCHAR(100) DEFAULT 'Sem observações'
);

INSERT INTO Cadastro (CNPJ, NomeEmpresa, EmailEmpresa, SenhaEmpresa, CidadeEmpresa, UFEmpresa, NumTel) VALUES
	('00.513.236/0001-23', 'New Beef Company', 'newbeef_contato@outlook.com', '@NewBeef45', 'São Paulo', 'SP', '(11)3891-4343'),
    ('00.897.801/0001-32', 'Big Meat Frigoríficos', 'bgmeat@hotmail.com', '#bigMeat321', 'Porto Alegre', 'RS', '(51)1698-8756'),
    ('00.486.589/0001-23', 'Mimosinha Congelados', 'mimosa_congelados@gmail.com', 'Mimo075$', 'Ribeirão das neves', 'MG', '(31)7895-5632');

INSERT INTO Caminhao (ModeloCaminhao, Placa, Motorista, RotaSaida, UFRotaSaida, RotaDestino, UFRotaDestino) VALUES 
	('Ford Transit', 'ENR8K07', 'Renato Gomes', 'São Paulo', 'SP', 'Ceilândia', 'GO'),
    ('Hyundai HR', 'WJU2D10', 'Jorge Ruiz', 'Ribeirão das Neves', 'MG', 'São Paulo', 'SP'),
    ('Kia Bongo', 'RGC8F63', 'Paola Ramos', 'Porto Alegre', 'RS', 'Curitiba', 'PR');

INSERT INTO Metrica (TempReal) VALUES
	(-5.82),
    (-4.89),
    (-6.01);
    
    INSERT INTO Sensor (TipoSensor, ModeloSensor, StatusSensor, ObsSensor) VALUES
	('Temperatura', 'LM35', 'Funcionando', 'Manutenção em: 08/03/2023'),
    ('Temperatura', 'LM35', 'Em Manutenção', 'Problemas na captura dos dados');
    
    INSERT INTO Sensor (TipoSensor, ModeloSensor, StatusSensor) VALUES
	('Temperatura', 'LM35', 'Funcionando');

SELECT * FROM Cadastro;
SELECT * FROM Caminhao;
SELECT * FROM Metrica;
SELECT * FROM Sensor;

SELECT CONCAT('A empresa ' ,  NomeEmpresa , ' fica em ' , CidadeEmpresa, ' - ', UFEmpresa) AS Localização FROM Cadastro;

