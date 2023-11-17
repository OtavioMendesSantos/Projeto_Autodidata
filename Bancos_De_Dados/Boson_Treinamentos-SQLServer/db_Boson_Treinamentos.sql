/* Cria o Banco de Dados 'Boson_Treinamentos'
CREATE DATABASE Boson_Treinamentos;
USE Boson_Treinamentos;

sp_helpdb Boson_Treinamentos; 
*/

/*Criando as Tabelas*/
CREATE TABLE tbl_livro( --Tabela livros--
	ID_Livro SMALLINT PRIMARY KEY IDENTITY(100,1), --Identity (seria o auto_increment do mysql) começa em 100 e é incrementado de 1 em 1.
	Nome_Livro VARCHAR(80) NOT NULL,
	ISBN VARCHAR(30) NOT NULL UNIQUE,
	Id_Autor SMALLINT NOT NULL,
	Data_Pub DATETIME NOT NULL,
	Preco_Livro MONEY NOT NULL
);

CREATE TABLE tbl_autores(--Tabela Autores--
	Id_Autor SMALLINT PRIMARY KEY IDENTITY(1,1),
	Nome_Autor VARCHAR(50),
	Sobrenome_Autor varchar (60)
);

CREATE TABLE tbl_editoras( --Tabela Editoras--
	Id_Editora SMALLINT PRIMARY KEY IDENTITY(1,1),
	Nome_Editora VARCHAR(50) NOT NULL
);
*/
/*Descreve as informações das tabelas, é paricido com o 'DESC' do MySQL*/
sp_help tbl_livro;
sp_help tbl_autores;
sp_help tbl_editoras;

/*
Cria Tabela de teste de IDENTITY
CREATE TABLE tbl_teste_identidade(
	ID_Teste SMALLINT PRIMARY KEY IDENTITY,
	Valor SMALLINT NOT NULL
);

INSERT INTO tbl_teste_identidade(valor) VALUES 
	(10), (20), (30), (40);

SELECT valor FROM tbl_teste_identidade;

DROP TABLE tbl_teste_identidade;
*/

USE Boson_Treinamentos;
SELECT * FROM tbl_livro;
SELECT * FROM tbl_autores;
SELECT * FROM tbl_editoras;

/*Exluindo uma coluna de uma tabela*/
ALTER TABLE tbl_livro
DROP COLUMN Id_Autor;

/*Alterando uma tabela - Adcionando Foreign Key (Constraints)*/
ALTER TABLE tbl_livro
ADD Id_Autor SMALLINT NOT NULL 
CONSTRAINT fk_Id_Autor /*Nome da constraint, apenas identificação*/ FOREIGN KEY (Id_Autor) 
REFERENCES tbl_autores;

ALTER TABLE tbl_livro
ADD Id_Editora SMALLINT NOT NULL 
CONSTRAINT fk_Id_Editora FOREIGN KEY (Id_Editora) 
REFERENCES tbl_editoras;

--Inserindo Valores nas tabelas--
SELECT * FROM tbl_autores;
INSERT INTO tbl_autores(Nome_Autor, Sobrenome_Autor) VALUES ('Daniel','Barret'), ('Gerald','Carter'), ('Mark', 'Sobell'), ('William','Stanek'), ('Richard','Blum');

SELECT * FROM tbl_editoras;
INSERT INTO tbl_editoras(Nome_Editora) VALUES ('Prentice Hall'), ('O´Reilly'), ('Microsoft Press'), ('Wiley');
use Boson_Treinamentos
SELECT * FROM tbl_livro;
INSERT INTO tbl_livro(Nome_Livro, ISBN, Data_Pub, Preco_Livro, Id_Autor, ID_Editora) VALUES ('Linux Command Line and Shell Scripting',143856969,'20091221',68.35,5,4), ('SSH, The Secure Shell',127658789,'20091221',58.30,1,2),('Using Samba',123856789,'20091221',61.45,2,2);
INSERT INTO tbl_livro(Nome_Livro, ISBN, Data_Pub, Preco_Livro, Id_Autor, ID_Editora) VALUES ('Fedora and Red Hat Linux', 123346789,'20101101', 62.24, 3, 1), ('Windows Server 2012 Inside Out', 123356789,'20040517', 66.80, 4, 3), ('Microsoft Exchange Server 2010', 123366789,'20001221', 45.30, 4, 3)

UPDATE tbl_livro SET Preco_Livro = 65.45 WHERE ID_Livro = 102; --Atualiza dados de uma tabela--
UPDATE tbl_autores SET Sobrenome_Autor = 'Cartman' WHERE Id_Autor = 2;
UPDATE tbl_livro SET Preco_Livro = 80.00, ISBN = '02020202' WHERE ID_Livro = 101; --Atualiza dados de mais de uma tabela--

--Trabalhando com Diversos Tipos de Select 
	SELECT * FROM tbl_livro ORDER BY Nome_Livro; --Seleciona de forma ordenada--
	SELECT DISTINCT Id_Autor, Preco_Livro FROM tbl_livro; --Seleciona valores distintos, porém não suporta count()--
	SELECT COUNT(*) FROM tbl_livro GROUP BY Id_Autor; --Agrupa valores de acordo com uma tabela, suporta o count()--
	SELECT * FROM tbl_livro WHERE Preco_Livro < 50.0; --Seleciona valores que passam por uma filtragem--
	SELECT * FROM tbl_livro WHERE Preco_Livro BETWEEN 50.00 AND 65.00; --Seleciona valores que passam por uma filtragem e estão dentro de um intervalo--
	SELECT * FROM tbl_Livro WHERE Preco_Livro > 40.00 AND Id_Autor = 4; --Selecionando com uso de operador lógico "AND"--
	SELECT * FROM tbl_Livro WHERE Preco_Livro > 65.00 OR Id_Autor = 5; --Selecionando com uso de operador lógico "OR"--
	SELECT * FROM tbl_livro WHERE Id_Autor IN (2,3,5); --Selecionando com uso do IN--
	SELECT * FROM tbl_livro WHERE Preco_Livro > (Select AVG(Preco_Livro) FROM tbl_livro); --Seleciona com base numa subquery--
	SELECT TOP 3 * FROM tbl_livro ORDER BY  Preco_Livro DESC; --Especifica a quantidade de registros a serem retornados--
	SELECT Nome_Livro AS Livros FROM tbl_livro; --Seleciona e cria um apelido para uma consulta--
	SELECT Nome_Autor FROM tbl_autores 
		UNION All --Faz a união de valores de duas tabelas numa consulta--
	SELECT Nome_Livro FROM tbl_livro;
	SELECT Nome_livro, ISBN --Faz um SELECT INTO criando uma nova tabela com as colunas selecionadas--
	Into Livro_ISBN
	FROM tbl_livro 
	WHERE ID_Livro > 2; 
	Select * FROM Livro_ISBN;
	SELECT * --Faz um SELECT INTO criando uma nova tabela com as colunas selecionadas--
	Into tbl_livro_backup
	FROM tbl_livro; 
	Select * FROM tbl_livro_backup;

--Funções Agregadas
	SELECT MIN(Preco_Livro) AS 'Valor Mínimo' FROM tbl_livro;
	SELECT MAX(Preco_Livro) AS 'Valor Máximo' FROM tbl_livro;
	SELECT AVG(Preco_Livro) AS 'Valor Médio' FROM tbl_livro;
	SELECT SUM(Preco_Livro) AS 'Valor Total' FROM tbl_livro;
	SELECT COUNT(Preco_Livro) AS 'Quantidade de Títulos'FROM tbl_livro;

--Like  e Not Like--
	SELECT * FROM tbl_livro WHERE Nome_Livro Like '%a%'
	SELECT * FROM tbl_livro WHERE Nome_Livro Not Like '%a%'

--Joins--
	--Inner Join--
	SELECT l.nome_livro AS 'Livro', a.nome_autor AS 'Autor'  FROM tbl_livro AS l
	INNER JOIN tbl_autores AS a --segunda tabela a ser pesquisada
	ON l.Id_Autor = a.Id_Autor; --ponto de conexão entre as tabelas-- 

	--Outer Join--
	SELECT * FROM tbl_livro AS l 
	RIGHT JOIN tbl_autores AS a
	ON l.Id_Autor = a.Id_Autor;

	SELECT * FROM tbl_autores AS a 
	LEFT JOIN tbl_livro AS l
	ON l.Id_Autor = a.Id_Autor;
	
	SELECT * FROM tbl_autores AS a 
	FULL JOIN tbl_livro AS l
	ON l.Id_Autor = a.Id_Autor;
	
--Campos Calculados
	/*
	CREATE DATABASE test;
	USE test;
	
	CREATE TABLE produto(
		id SMALLINT PRIMARY KEY IDENTITY(100,1),
		nome VARCHAR(20),
		preco MONEY,
		quantidade SMALLINT,
		total AS (preco * quantidade)
	);

	INSERT INTO produto Values ('Biscoito Gostoso', 3.50, 100);
	SELECT * FROM produto;

	-- Este comando (UPDATE produto SET total = 10.00;) não funciona, pois se trata de uma coluna computada--
	DROP DATABASE test;
	*/

--Criando um Índice 
	SELECT * FROM tbl_livro;

	CREATE INDEX Indice_Nome_Livro
	ON tbl_Livro(Nome_Livro);

--Criando Rules/Regras
	CREATE RULE rl_preco AS @VALOR > 10.00;

	EXECUTE SP_BINDRULE rl_preco, 'tbl_livro.preco_livro'; --STORED PROCEDURE com a função de vincular uma regra.
	SELECT * FROM tbl_livro;
	UPDATE tbl_livro SET preco_livro = -10 where ID_Livro = 105; --como o valor é menor que 10, não me é permitido prosseguir com esse comando

--Backup do Banco de Dados
	BACKUP DATABASE Boson_Treinamentos
	TO DISK = 'C:\Documents'; --FAZ UM BACKUP DO BANCO DE DADOS NO LOCAL ESPECIFICADO
	--WITH FORMAT -- USADO PARA FORMATAR O LOCAL--
	GO