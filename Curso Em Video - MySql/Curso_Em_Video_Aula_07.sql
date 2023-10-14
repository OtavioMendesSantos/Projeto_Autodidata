CREATE DATABASE cursoemvideo
default character set utf8
default collate utf8_general_ci;
use cursoemvideo;

CREATE TABLE pessoas (
	id int not null auto_increment,
    nome varchar(30) not null, 
    nascimento date,
    sexo enum('M','F'),
    peso decimal(5,2),
    altura decimal(3,2),
    nacionalidade varchar(20) default 'Brasil',
    PRIMARY KEY (id)
    )  DEFAULT CHARSET = utf8; /*definição padrão de caracteres suportados*/
describe pessoas;/*Descreve a tabela*/ 

/*Inserindo dados na tabela*/
insert into pessoas 
  (id, nome, nascimento, sexo, peso, altura, nacionalidade)
  values
    (default, 'Godofredo', '1984-01-02' ,'M', '78.5', '1.83', 'Brasil'),
    (default, 'Maria', '1999-12-30', 'F', '55.2', '1.65', 'Portugal'),
	(default, 'Creusa', '1920-12-30', 'F', '55.2','1.65', default),
    (default, 'Adalgiza', '1930-11-2','F', '63.2', '1.83', 'Irlanda'),
	(Default, 'Cláudio', '1975-4-22', 'M', '99.0', '2.15',Default),
    (Default, 'Ana', '1975-12-22', 'F', '52.3', '1.45',Default),
	(Default, 'Pedro', '2000-07-15', 'M', '52.3', '1.45',Default),
	(Default, 'Maria', '1999-05-30', 'F', '75.9', '1.70',Default);
  
  select * from pessoas; /*Mostra os dados de uma tabela*/ 
  delete from pessoas where id = 25; /*Apaga dados de uma tabela*/

/*ALTER TABLE
Syntaxe:
ALTER TABLE 'NomeDaTabela'
ACAO

EXEMPLO DO QUE PODE SER FEITO:
- Add, Remover, or alterar uma coluna
- Set valores padrões para uma coluna
- Add ou Remover restrições de colunas 
- Renomear uma tabela
*/

/*Modificando, Adicionando e Excluindo colunas e informações na tabela*/

Alter table pessoas
add column codigo int first; /*Coloca a tabela na primeira posição*/

Alter table pessoas
drop column codigo; /*Apagando uma coluna na tabela*/

Alter table pessoas
add column profissao varchar(10); /*Adiciona uma coluna na tabela*/

ALTER TABLE pessoas 
DROP COLUMN profissao; /*Excluindo uma coluna*/

Alter table pessoas
add column profissao varchar(10) after nome; /*Coloca a tabela em determinada posição*/

Alter table pessoas
modify column profissao varchar(20) not null default ''; /*Modificando definições*/

alter table pessoas
change column profissao prof varchar(20) NOT null default ''; /*Altera o nome da coluna*/

UPDATE `cursoemvideo`.`pessoas` SET `prof` = 'estudante' WHERE (`id` >= '1'); /*Inserindo informações numa id já existente*/
Update pessoas set prof = 'mecânico' where ( id = 2);
select * from pessoas;

alter table pessoas rename to gafanhotos; /*Modifica o nome da tabela*/
Create table if not exists gafanhotos (teste int);

alter table gafanhotos 
change column prof profissao varchar(20) not null default '';

Create table if not exists cursos (
nome varchar(30) not null unique,
descricao text not null,
carga int unsigned, /*economiza um byte para cada informação armazenada*/
totalaulas int,
ano year default '2023'
) default charset = utf8;
describe cursos;

alter table cursos
add column idcurso varchar(10) first; 
alter table cursos 
add primary key(idcurso);
alter table cursos
modify idcurso int auto_increment; 
/*alter table cursos add column idcurso int primary key auto_increment first;*/

/*Inserindo registros*/
/*REGISTRO = LINHA = TUPLA*/
select * from gafanhotos;
insert into cursos values 
('1','HTML4','Curso de HTML5','40','37','2014'),
('2','Algoritmos','Lógica de programação','20','15','2014'),
('3','Photoshop','Dicas de Photoshop CC','10','8','2014'),
('4','PGP','Curso de PHP para iniciantes','40','20','2010'),
('5','Jarva','Introdução a linguagem Java','10','29','2000'),
('6','MySQL','Banco de dados MySQL','30','15','2016'),
('7','Word','Curso completo de Word','40','30','2016'),
('8','Sapateado','Danças Rítimicas','40','30','2018'),
('9','Cozinha Árabe','Aprendendo a Fazer Kibe','40','30','2018'),
('10','YouTuber','Gerar Polêmica e ganhar inscritos','5','2','2018');
select * from cursos;
SELECT * FROM cursos ORDER  by carga asc; /*asc: crescente | desc: decrescente*/

/*Corrigindo registros na tabela*/
Update cursos 
set nome = 'HTML5' where idcurso = '1';
Update cursos 
set nome = 'PHP', ano = '2015' where idcurso = '4';
Update cursos
set nome = 'Java', carga = '40', ano = '2015' where idcurso = '5'
Limit 1;/*Limita a ação do comando a apenas 1 linha*/
Update cursos
set carga = '0', ano = '2018' where idcurso >= 8;
delete from cursos where idcurso >= 8;
truncate cursos; /*truncar uma tabela = apagar todos os dados*/