CREATE TABLE Empresa(
token INT PRIMARY KEY, 
nome VARCHAR (45) NOT NULL,
cnpj CHAR (18) NOT NULL,
cep VARCHAR(11) NOT NULL,
telefone CHAR(14)NOT NULL,
idEmpresa int 
);

CREATE TABLE Usuario(
idUsuario INT AUTO_INCREMENT ,
Nome VARCHAR(45), -- + sobrenome = atributo composto 
Sobrenome VARCHAR(45),
CPF CHAR(14) UNIQUE NOT NULL,
Email VARCHAR(45) NOT NULL,
Senha VARCHAR(10) NOT NULL,
fkToken INT,
Administrador INT,
CONSTRAINT chaveCtoken FOREIGN KEY (fkToken) REFERENCES Empresa (token),
CONSTRAINT pkUsuarios PRIMARY KEY (idUsuario, fkToken)
);

create table setor (
	idSetor INT PRIMARY KEY auto_increment,
    descricao varchar(100)
);

insert into setor values
(1,'Caminhão 1'),
(2,'Caminhão 2'),
(3,'Caminhão 3'),
(4,'Caminhão 4');


create table medida(
	idMedida int primary key auto_increment,
    area1 double ,
    momento datetime,
    fkSetor INT,
    CONSTRAINT fkSet FOREIGN KEY (fkSetor) REFERENCES Setor (idSetor)
);

-- insert para teste no gráfico:
INSERT INTO medida (area1,momento,fkSetor) VALUES 
                    (5,now(),1),
                    (4,now(),2),
                    (5,now(),3),
                    (5,now(),4);

CREATE TABLE Veiculo(
idVeiculo INT PRIMARY KEY AUTO_INCREMENT ,
modelo VARCHAR (45) NOT NULL,
placa VARCHAR (8) NOT NULL,
fkEmpresaVeiculo INT,CONSTRAINT chkEmpre FOREIGN KEY (fkEmpresaVeiculo) REFERENCES usuario(idUsuario),
qtdSensor INT
);

-- INSERT VEÍCULO PARA TESTAR A DASHBOARD INICIAL
insert into veiculo values
(null,'Mercedes','ABC-1044',1,1),
(null,'Volkswagem','AVB-9894',1,1),
(null,'Scania','YUV-7044',1,1),
(null,'Mercedes','AGC-8980',1,1);

CREATE TABLE Motorista(
idMotorista INT PRIMARY KEY AUTO_INCREMENT ,
nome VARCHAR(45) NOT NULL,
sobrenome VARCHAR(45) NOT NULL,
CNH CHAR(10) NOT NULL,
telContato CHAR(14) NOT NULL);