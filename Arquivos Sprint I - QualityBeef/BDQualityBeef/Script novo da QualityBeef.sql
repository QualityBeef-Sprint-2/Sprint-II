CREATE DATABASE QualityBeef;
USE QualityBeef; 

-- Tabela cadastro da empresa 
CREATE TABLE Cadastro (
idCadastro INT PRIMARY KEY AUTO_INCREMENT,
NomeEmpresa VARCHAR(40),
EmailEmpresa VARCHAR(40),
SenhaEmpresa VARCHAR (16),
CNPJ CHAR(18)
);

-- Tabela Representante da empresa 
CREATE TABLE Representante (
idRepresentante INT PRIMARY KEY AUTO_INCREMENT,
NomeRepresentante VARCHAR(50),
EmailRepresentante VARCHAR(40),
CPF CHAR(11),
fkEmpresa INT,
CONSTRAINT FOREIGN KEY (fkEmpresa) REFERENCES Cadastro (idCadastro)
)AUTO_INCREMENT = 100;

-- Tabela Sensor
CREATE TABLE Sensor (
idSensor INT PRIMARY KEY AUTO_INCREMENT,
TipoSensor VARCHAR(40),
ModeloSensor VARCHAR(40),
CkStatusSensor VARCHAR(50),
CONSTRAINT CHECK (CkStatusSensor IN ('on' , 'off'))
);

-- Tabela Retorno do Sensor
CREATE TABLE RetornoSensor (
idRetorno INT PRIMARY KEY AUTO_INCREMENT,
Temperatura FLOAT,
DataTemperatura DATE DEFAULT CURRENT_TIMESTAMP,
fkSensor INT PRIMARY KEY,
CONSTRAINT FOREIGN KEY (fkSensor) REFERENCES Sensor(idSensor)
);

-- Tabela Caminhão de transporte 
CREATE TABLE Caminhao (
idCaminhao INT PRIMARY KEY AUTO_INCREMENT,
ModeloCaminhao VARCHAR(50),
Placa VARCHAR(9),
NomeMotorista VARCHAR(50),
RotaSaida VARCHAR(80),
UFRotaSaida CHAR(2),
RotaDestino VARCHAR(80),
UFRotaDestino CHAR(2),
fkSensor INT,
CONSTRAINT FOREIGN KEY (fkSensor) REFERENCES Sensor (idSensor)
);

