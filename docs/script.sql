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
    tempo TIME,
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

CREATE TRIGGER calculoTempo AFTER UPDATE entradas
    BEGIN UPDATE entradas SET 
        tempo = (SELECT TIMEDIFF((SELECT h_saida FROM entradas WHERE id_entrada = 1), (SELECT h_entrada FROM entradas WHERE id_entrada = 1)));

-- https://stackoverflow.com/questions/31634918/how-do-i-add-a-last-modified-and-created-column-in-a-sql-server-table
-- https://mariadb.com/kb/en/date-and-time-literals/
-- https://mariadb.com/kb/en/built-in-functions/
-- https://www.mssqltips.com/sqlservertip/1145/date-and-time-conversions-using-sql-server/

-- [
-- 	{
-- 		"cpf": "123.456.154-12",
-- 		"nome": "Dalson Knox",
-- 		"telefone": "(22)78515-2345"
-- 	},
-- 	{
-- 		"cpf": "123.456.789-12",
-- 		"nome": "Trevor Lawrance",
-- 		"telefone": "(21)99981-7890"
-- 	},
-- 	{
-- 		"cpf": "513.412.782-85",
-- 		"nome": "Patrick Mahomes",
-- 		"telefone": "(16)95355-1135"
-- 	},
-- 	{
-- 		"cpf": "751.217.145-22",
-- 		"nome": "Travis Kelce",
-- 		"telefone": "(19)97136-9871"
-- 	}
-- ]

{
	"cpf": "123.456.789-12",
	"nome": "Trevor Lawrance",
	"telefone": "(21)99981-7890"		
}

-- [
-- 	{
-- 		"placa": "EXI7A16",
-- 		"modelo": "Fiat Mobi",
-- 		"cor": "Branco",
-- 		"cpf": "513.412.782-85"
-- 	},
-- 	{
-- 		"placa": "EXL2260",
-- 		"modelo": "Celta",
-- 		"cor": "Azul",
-- 		"cpf": "123.456.154-12"
-- 	},
-- 	{
-- 		"placa": "FEB2060",
-- 		"modelo": "Sandero",
-- 		"cor": "Prata",
-- 		"cpf": "123.456.789-12"
-- 	},
-- 	{
-- 		"placa": "FMC2550",
-- 		"modelo": "ONIX",
-- 		"cor": "BRANCO",
-- 		"cpf": "513.412.782-85"
-- 	},
-- 	{
-- 		"placa": "FPZ9594",
-- 		"modelo": "Ford Ka",
-- 		"cor": "Vermelho",
-- 		"cpf": "123.456.789-12"
-- 	}
-- ]

	{
		"placa": "EXL2260",
		"modelo": "COBALT",
		"cor": "Vinho",
		"cpf": "751.217.145-22"
	}

-- [
-- 	{
-- 		"id_vaga": "A01"
-- 	},
-- 	{
-- 		"id_vaga": "A02"
-- 	},
-- 	{
-- 		"id_vaga": "A03"
-- 	},
-- 	{
-- 		"id_vaga": "A04"
-- 	},
-- 	{
-- 		"id_vaga": "A05"
-- 	}
-- ]



-- [
-- 	{
-- 		"id_entrada": 1,
-- 		"data": "2022-11-04T03:00:00.000Z",
-- 		"h_entrada": "08:06:10",
-- 		"h_saida": "08:35:55",
-- 		"tempo": "00:29:45",
-- 		"valor": null,
-- 		"placa": "EXL2260",
-- 		"id_vaga": "A01"
-- 	},
-- 	{
-- 		"id_entrada": 2,
-- 		"data": "2022-11-04T03:00:00.000Z",
-- 		"h_entrada": "08:06:15",
-- 		"h_saida": "08:33:03",
-- 		"tempo": "00:26:48",
-- 		"valor": null,
-- 		"placa": "FEB2060",
-- 		"id_vaga": "A02"
-- 	},
-- 	{
-- 		"id_entrada": 3,
-- 		"data": "2022-11-04T03:00:00.000Z",
-- 		"h_entrada": "08:06:17",
-- 		"h_saida": "08:24:23",
-- 		"tempo": "00:18:06",
-- 		"valor": null,
-- 		"placa": "FMC2550",
-- 		"id_vaga": "A03"
-- 	},
-- 	{
-- 		"id_entrada": 4,
-- 		"data": "2022-11-04T03:00:00.000Z",
-- 		"h_entrada": "08:49:01",
-- 		"h_saida": "08:51:48",
-- 		"tempo": "00:01:25",
-- 		"valor": null,
-- 		"placa": "EXI7A16",
-- 		"id_vaga": "A05"
-- 	},
-- 	{
-- 		"id_entrada": 5,
-- 		"data": "2022-11-04T03:00:00.000Z",
-- 		"h_entrada": "08:53:18",
-- 		"h_saida": "08:54:21",
-- 		"tempo": null,
-- 		"valor": null,
-- 		"placa": "EXL2260",
-- 		"id_vaga": "A02"
-- 	}
-- ]

{
	"id_entrada": "5"
}