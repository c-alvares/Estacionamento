DROP DATABASE IF EXISTS estacionamento;
CREATE DATABASE estacionamento CHARSET=UTF8 COLLATE UTF8_GENERAL_CI;
USE estacionamento;

-- DDL
CREATE TABLE clientes (
    cpf VARCHAR (14) NOT NULL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    telefone VARCHAR(14) NOT NULL
);

DESCRIBE clientes;

CREATE TABLE carros (
    placa VARCHAR(7) NOT NULL PRIMARY KEY,
    modelo VARCHAR(20) NOT NULL,
    cor VARCHAR(14) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    CONSTRAINT fk_carros FOREIGN KEY(cpf) REFERENCES clientes(cpf)
);

DESCRIBE carros;

CREATE TABLE entradas (
    id_entrada INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    data DATE NOT NULL,
    h_entrada TIME NOT NULL,
    h_saida TIME,
    tempo DECIMAL,
    valor DECIMAL(5,2),
    placa VARCHAR(7) NOT NULL,
    CONSTRAINT fk_placa FOREIGN KEY(placa) REFERENCES carros(placa)
);

DESCRIBE entradas;


-- DML

INSERT INTO clientes VALUES
("751.217.145-22", "Travis Kelce", "(19)97136-9871"),
("312.643.987-21", "Trevor Allen Lawrance", "(21)99981-7890 "),
("123.456.789-12", "Patrick Mahomes", "(16)94196-9523"),
("520.684.100-66", "Dalson Knox", "(19)95526-2014"),
("842.895.411-74", "Sauce Gardner", "(14)92235-4105");

SELECT * FROM clientes;

INSERT INTO carros VALUES
("FPZ9594","ONIX","PRETO","751.217.145-22"),
("FMC2550","KÁ","PRETO","312.643.987-21"),
("EXL2260","COBALT","CINZA", "123.456.789-12"),
("EXI7A16","SANDERO","PRATA","312.643.987-21"),
("FEB2060","FIESTA","CINZA","520.684.100-66"),
("FMI3904","GOL","BRANCO","842.895.411-74");

SELECT * FROM carros;


INSERT INTO entradas VALUES 
(DEFAULT,CURDATE(),CURTIME(),NULL,NULL,NULL,"FPZ9594");

SELECT * FROM entradas;