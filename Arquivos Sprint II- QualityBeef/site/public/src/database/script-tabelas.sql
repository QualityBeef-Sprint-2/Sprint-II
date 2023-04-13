create database qualitybeef;

use qualitybeef;


CREATE TABLE Empresa(
idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR (45),
CNPJ CHAR (18) NOT NULL,
CEP VARCHAR(11),
telefone CHAR(14)
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
Nome VARCHAR(45),
Sobrenome VARCHAR(45),
CNH CHAR(10),
TelContato CHAR(14));

CREATE TABLE Veiculo(
idVeiculo INT PRIMARY KEY AUTO_INCREMENT ,
Modelo VARCHAR (45),
Placa VARCHAR (8),
fkEmpresa INT,
fkMotorista INT,
CONSTRAINT fkemp FOREIGN KEY (fkEmpresa) REFERENCES Empresa (idEmpresa),
CONSTRAINT fkmoto FOREIGN KEY (fkMotorista) REFERENCES Motorista (idMotorista));

CREATE TABLE Camara(
idCamara INT PRIMARY KEY AUTO_INCREMENT,
qtdCamara INT,
fkVeiculo INT,
CONSTRAINT fkveic FOREIGN KEY (fkVeiculo) REFERENCES Veiculo (idVeiculo)
);

CREATE TABLE CamaraMetrica(
idMetrica INT AUTO_INCREMENT,
TemperaturaMax INT,
TemperaturaMin INT,
fkCamara INT,
CONSTRAINT fkCam FOREIGN KEY (fkCamara) REFERENCES Camara (idCamara),
CONSTRAINT pkMetrica PRIMARY KEY (idMetrica,fkCamara));

CREATE TABLE Sensor(
idSensor INT PRIMARY KEY AUTO_INCREMENT,
ModeloSensor VARCHAR(45),
StatusSensor VARCHAR(15),
fkCamara INT,
CONSTRAINT fkCam FOREIGN KEY (fkCamara) REFERENCES Camara (idCamara));

CREATE TABLE Leitura(
idLeitura INT AUTO_INCREMENT,
ValorTemperatura FLOAT,
DataHora DATETIME,
fkSensor INT,
CONSTRAINT fkSensor FOREIGN KEY (fkSensor) REFERENCES Sensor (idSensor),
CONSTRAINT pkLeitura PRIMARY KEY (idLeitura,fkSensor));
