--BANCO LOJA
CREATE DATABASE DB_LOJA;
USE DB_Loja;

--TABELA CLIENTES
CREATE TABLE tbl_clientes(
ID_CLIENTE SMALLINT PRIMARY KEY IDENTITY (100,1),
NOME_CLIENTE VARCHAR(25)NOT NULL,
CPF VARCHAR(15) UNIQUE NOT NULL
)

--TABELA PRODUTO
CREATE TABLE tbl_produtos(
ID_PRODUTO SMALLINT PRIMARY KEY IDENTITY,
NOME_PRODUTO VARCHAR(25)NOT NULL,
PRECO_PRODUTO MONEY NOT NULL
)

--TABELA COMPRAS
CREATE TABLE tbl_compras(
ID_COMPRA SMALLINT PRIMARY KEY IDENTITY,
QUANTIDADE SMALLINT,
ID_PRODUTO SMALLINT NOT NULL,
ID_CLIENTE SMALLINT NOT NULL
)

--CONSTARINTS
ALTER TABLE tbl_compras
ADD CONSTRAINT FK_ID_CLIENTE FOREIGN KEY (ID_CLIENTE)
REFERENCES CLIENTES

ALTER TABLE tbl_compras
ADD CONSTRAINT FK_ID_PRODUTO FOREIGN KEY (ID_PRODUTO)
REFERENCES PRODUTOS

--DADOS DO CLIENTE---------------------------------------------------

INSERT INTO tbl_clientes (NOME_CLIENTE,CPF) VALUES ('ANDERSON',32003705805), ('ANDREA',41011103586), ('GABRIEL',22230150687), ('ALANA',85003204689), ('ELIZANGELA',66601204689), ('ANGELUZA',55589222235), ('CICERO',44486224978);

--DADOS DO PRODUTO---------------------------------------------------

INSERT INTO tbl_produtos (NOME_PRODUTO,PRECO_PRODUTO) VALUES ('PENDRIVER', 20.00), ('TECLADO', 35.00), ('MOUSE', 25.00), ('HD500GB', 200.00), ('SSD250GB', 150.00), ('WEBCAN', 30.00), ('DVD', 5.00), ('CABO USB', 50.00), ('CABO HDMT', 60.00), ('PLACA DE VIDEO', 600.00), ('PLACA DE REDE', 100.00);

--DADOS DAS COMPRAS--------------------------------------------------
INSERT INTO TBL_COMPRAS (QUANTIDADE,ID_CLIENTE,ID_PRODUTO) VALUES (3,100,1), (2,102,3), (4,101,9), (3,101,8), (1,106,5), (3,103,7), (5,105,5), (1,100,10), (2,104,1), (5,104,3), (1,102,11);

-----------------------------------------------------
SELECT * FROM tbl_compras AS Compras;
SELECT * FROM tbl_produtos AS Produtos;
SELECT * FROM tbl_clientes AS Clientes;

--Consulta com SUBQUERY
	SELECT Resultado.Clientes, SUM(Resultado.Total) AS Total 
	FROM 
	(SELECT cli.NOME_CLIENTE AS Clientes, cpr.QUANTIDADE * pro.preco_produto AS Total 
	FROM tbl_clientes AS cli
	INNER JOIN tbl_compras AS cpr 
	ON cli.ID_CLIENTE = cpr.ID_CLIENTE
	INNER JOIN tbl_produtos AS pro
	ON pro.ID_PRODUTO = cpr.ID_PRODUTO) AS Resultado
	GROUP BY Resultado.Clientes
	ORDER BY Total;

--Consuta com CTE
	WITH ConsultaCTE (Cliente, Total)
	AS (SELECT cli.Nome_Cliente AS Cliente, pro.Preco_Produto * com.Quantidade AS Total
	FROM tbl_clientes AS cli
	INNER JOIN tbl_compras AS com 
	ON cli.ID_CLIENTE = com.ID_CLIENTE
	INNER JOIN tbl_produtos AS pro
	ON pro.ID_PRODUTO = com.ID_PRODUTO)

	SELECT Cliente, SUM(Total) AS ValorTotal 
	FROM ConsultaCTE
	GROUP BY Cliente ORDER BY ValorTotal;
	