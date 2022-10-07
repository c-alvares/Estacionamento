DROP DATABASE IF EXISTS estacionamento;
CREATE DATABASE estacionamento CHARSET=UTF8 COLLATE UTF8_GENERAL_CI;
USE estacionamento;

-- DDL
CREATE TABLE clientes (
    cpf VARCHAR (14) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    telefone VARCHAR(13) NOT NULL,
    CONSTRAINT pk_cli PRIMARY KEY(cpf)
);

DESCRIBE clientes;

CREATE TABLE carros (
    placa VARCHAR(7) NOT NULL,
    modelo VARCHAR(20) NOT NULL,
    cor VARCHAR(14) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    CONSTRAINT pk_carros PRIMARY KEY(placa),
    CONSTRAINT fk_carros FOREIGN KEY(cpf) REFERENCES clientes(cpf)
);

DESCRIBE carros;

CREATE TABLE vagas (
    id_vaga VARCHAR(3) NOT NULL,
    estatus VARCHAR(12),
    CONSTRAINT pk_vagas PRIMARY KEY(id_vaga)
);

DESCRIBE vagas;

CREATE TABLE entradas (
    id_entrada VARCHAR(3) NOT NULL,
    data DATE NOT NULL,
    horario TIME NOT NULL,
    tempo DECIMAL NOT NULL,
    placa VARCHAR(7) NOT NULL,
    id_vaga VARCHAR(3) NOT NULL,
    CONSTRAINT pk_entradas PRIMARY KEY(id_entrada),
    CONSTRAINT fk_plac FOREIGN KEY(placa) REFERENCES carros(placa),
    CONSTRAINT fk_id FOREIGN KEY(id_vaga) REFERENCES vagas(id_vaga)
);

DESCRIBE entradas;



-- DML
INSERT INTO clientes VALUES
"FPZ9594","ONIX","PRETO"
"FMC2550","KÁ","PRETO"
"FEB2060","FIESTA","CINZA"
"EXI7A16","SANDERO","PRATA"
"FMI3904","GOL","BRANCO"
"EXL2260","COBALT","CINZA"

SELECT * FROM clientes;
SELECT * FROM carros;
SELECT * FROM vagas;
SELECT * FROM entradas;