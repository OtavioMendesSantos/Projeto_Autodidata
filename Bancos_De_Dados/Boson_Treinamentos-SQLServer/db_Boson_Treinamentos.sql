/* Cria o Banco de Dados 'Boson_Treinamentos'
CREATE DATABASE Boson_Treinamentos;
USE Boson_Treinamentos;

sp_helpdb Boson_Treinamentos; 
*/

/*Criando as Tabelas
CREATE TABLE tbl_livro( --Tabela livros
	ID_Livro SMALLINT PRIMARY KEY IDENTITY(100,1), --Identity (seria o auto_increment do mysql) começa em 100 e é incrementado de 1 em 1.
	Nome_Livro VARCHAR(80) NOT NULL,
	ISBN VARCHAR(30) NOT NULL UNIQUE,
	Id_Autor SMALLINT NOT NULL,
	Data_Pub DATETIME NOT NULL,
	Preco_Livro MONEY NOT NULL
);

CREATE TABLE tbl_autores( --Tabela Autores
	Id_Autor SMALLINT PRIMARY KEY IDENTITY(1,1),
	Nome_Autor VARCHAR(50),
	Sobrenome_Autor varchar (60)
);

CREATE TABLE tbl_editoras( --Tabela Editoras
	Id_editora SMALLINT PRIMARY KEY IDENTITY(1,1),
	Nome_Editora VARCHAR(50) NOT NULL
);
*/
/*Descreve as informações das tabelas, é paricido com o 'DESC' do MySQL
sp_help tbl_livro;
sp_help tbl_autores;
sp_help tbl_editoras;
*/