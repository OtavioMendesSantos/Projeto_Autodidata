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

SELECT * FROM tbl_livro;
INSERT INTO tbl_livro(Nome_Livro, ISBN, Data_Pub, Preco_Livro, Id_Autor, ID_Editora) VALUES ('Linux Command Line and Shell Scripting',143856969,'20091221',68.35,5,4), ('SSH, The Secure Shell',127658789,'20091221',58.30,1,2),('Using Samba',123856789,'20091221',61.45,2,2);
INSERT INTO tbl_livro(Nome_Livro, ISBN, Data_Pub, Preco_Livro, Id_Autor, ID_Editora) VALUES ('Fedora and Red Hat Linux', 123346789,'20101101', 62.24, 3, 1), ('Windows Server 2012 Inside Out', 123356789,'20040517', 66.80, 4, 3), ('Microsoft Exchange Server 2010', 123366789,'20001221', 45.30, 4, 3)