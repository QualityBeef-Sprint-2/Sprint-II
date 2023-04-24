CREATE DATABASE QualityBeef;

USE QualityBeef;

CREATE TABLE Empresa(
idEmpresa INT PRIMARY KEY,
RazãoSocial VARCHAR (45),
CNPJ CHAR (18) NOT NULL,
CEP VARCHAR(11),
TelefoneComercial CHAR(14)
);


CREATE TABLE Usuario(
idUsuario INT AUTO_INCREMENT,
Nome VARCHAR(45), -- Atributo composto
Sobrenome VARCHAR(45),
CPF CHAR(14) UNIQUE NOT NULL,
Email VARCHAR(45) NOT NULL,
Senha VARCHAR(10) NOT NULL,
fkEmpresa INT,
CONSTRAINT fkemp FOREIGN KEY(fkEmpresa) REFERENCES Empresa (idEmpresa),
CONSTRAINT pkUsuario PRIMARY KEY(idUsuario,fkEmpresa));

CREATE TABLE Motorista(
idMotorista INT PRIMARY KEY AUTO_INCREMENT ,
nome VARCHAR(45),
sobrenome VARCHAR(45),
CNH CHAR(10),
telContato CHAR(14));

CREATE TABLE Veiculo(
idVeiculo INT PRIMARY KEY AUTO_INCREMENT ,
modelo VARCHAR (45),
placa VARCHAR (8),
fkEmpresa INT,
fkMotorista INT,
CONSTRAINT fkempresa FOREIGN KEY (fkEmpresa) REFERENCES Empresa (idEmpresa),
CONSTRAINT fkmoto FOREIGN KEY (fkMotorista) REFERENCES Motorista (idMotorista));


CREATE TABLE Sensor(
idSensor INT PRIMARY KEY AUTO_INCREMENT,
modeloSensor VARCHAR(45),
statusSensor VARCHAR(15),
localSensor VARCHAR (45),
fkVeiculo INT,
CONSTRAINT fkVeiculo FOREIGN KEY (fkVeiculo) REFERENCES Veiculo (idVeiculo));

CREATE TABLE Leitura(
idLeitura INT AUTO_INCREMENT,
valorTemperatura FLOAT,
dataHora DATETIME,
fkSensor INT,
CONSTRAINT fkSensor FOREIGN KEY (fkSensor) REFERENCES Sensor (idSensor),
CONSTRAINT pkLeitura PRIMARY KEY (idLeitura,fkSensor));

INSERT INTO Empresa VALUES 
(1, 'Alcantara Free LTDA', '12.345.678/0001-01', '12345-670', '(11) 1234-0678'),
(2, 'FrigoTech S/A', '15.005.788/0001-76', '02045-880', '(11) 2200-0678'),
(3, 'JazzIce LTDA', '33.345.520/0001-21', '12545-170', '(11) 3334-0612');

INSERT INTO Usuario VALUES 
(null, 'João', 'Batista', '123.456.789-10', 'joao.batista@alcantarafree.com','pass1234', 1),
(null, 'Ana', 'Silva', '576.456.321-10', 'ana.silva@gmail.com', '987654%', 2),
(null, 'Gabrielly', 'Moraes', '234.567.890-21', 'gaby.moraes@jazzice.com', 'xqo1%3', 3),
(null, 'Celine', 'Macedo', '345.678.901-32', 'celine.macedo@alcantarafree.com', '456#Gh', 1),
(null, 'Guilherme', 'Ferreira', '567.321.123-54', 'guilherme.batista@jazzice.com', 'ice$46585', 3);

INSERT INTO Motorista VALUES 
(1, 'Ricardo', 'Neves', '1234567891', '(11)95864-1023'),
(2, 'Camila', 'Guerra', '1004457855', '(11)95588-2593'),
(3, 'Fernando', 'José', '5534567848', '(11)92245-1127');

INSERT INTO Veiculo VALUES 
(null, 'Fiat Fiorino', 'GHR-2030', '1', '2'),
(null, 'Vulk Volkswagen', 'JSA-1512', '2', '1'),
(null, 'Fiat Truck', 'XDA-2888', '3', '3');


INSERT INTO Sensor VALUES
(null, 'LM35', 'Ativo', 'Câmara 1', 1),
(null, 'LM35', 'Ativo', 'Baú 7', 2),
(null, 'LM35', 'Manutenção', 'Assistência', null),
(null, 'LM35', 'Ativo', 'Câmara 2', 3);

Select * from leitura;

INSERT INTO leitura VALUES 
(null, '2.15', '2023-01-20 15:30:50', 1),
(null, '-1.00', '2023-02-11 09:00:10', 2),
(null, '1.00', '2023-03-10 07:30:40', 1),
(null, '3.15', '2023-04-10 13:00:50', 2),
(null, '4.15', '2022-03-20 22:30:50', 4);

SELECT * FROM Empresa Join Usuario ON fkEmpresa = idEmpresa;

SELECT * FROM Sensor 
LEFT JOIN Leitura ON fkSensor = idSensor;

SELECT * FROM Veiculo JOIN Sensor ON fkVeiculo = idVeiculo;

SELECT * FROM Veiculo JOIN Motorista ON fkMotorista = idMotorista;





