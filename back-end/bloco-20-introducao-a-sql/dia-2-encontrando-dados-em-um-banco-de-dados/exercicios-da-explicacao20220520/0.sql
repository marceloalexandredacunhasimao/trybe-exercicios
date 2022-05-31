/*
SELECT 18*3;
select now();
select 'Testando';
USE sakila;
SELECT * FROM city;
SELECT first_name, last_name FROM sakila.customer;
SELECT * FROM rental;
#Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film;
SHOW TABLES;
describe film;
SELECT title AS 'título', description AS 'descrição', release_year AS 'data de lançamento' FROM sakila.film;

SELECT CONCAT(first_name,' ', last_name) AS 'Nome completo' FROM sakila.actor;

DESCRIBE sakila.film;

#Na tabela sakila.film, monte uma query que exiba o título e o ano de lançamento dos filmes
#em uma coluna e dê a ela o nome Lançamento do Filme.
SELECT CONCAT(title,', ',release_year) AS 'Lançamento do Filme' FROM sakila.film LIMIT 20 OFFSET 500;

#SELECT * FROM sakila.film;
#Na tabela sakila.film, crie uma query que exiba o título do filme e sua classificação
#indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação. Não se
#esqueça de deixar um espaço entre as palavras para que fiquem legíveis.
SELECT CONCAT(title,',',rating) AS 'classificação indicativa' FROM sakila.film;
DESCRIBE sakila.film;

#Na tabela sakila.address, monte uma query que exiba a rua e o distrito de cada
#registro em uma coluna apenas, e dê a essa coluna o nome Endereço.
DESCRIBE sakila.address;
SELECT CONCAT(address,', ',district) FROM sakila.address;
*/



######################################################################################################
#Criar nova database:
CREATE DATABASE `Escola`;
#Criar nova tabela:
CREATE TABLE IF NOT EXISTS Escola.Estudantes (
	`Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);

#Inserir na nova tabela criada:
INSERT INTO Escola.Estudantes VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);

#Mostra tabela:
SELECT * FROM Escola.Estudantes;
SELECT DISTINCT Nome, Idade FROM Escola.Estudantes;
SELECT DISTINCT Nome FROM Escola.Estudantes;
SELECT DISTINCT Idade FROM Escola.Estudantes;
################################################################################################




################################################################################################
#SELECT COUNT(password) FROM sakila.staff;
#SELECT COUNT(*) FROM sakila.staff;
#SELECT COUNT(email) FROM sakila.staff;
SELECT * FROM sakila.rental LIMIT 3 OFFSET 100;
SELECT * FROM sakila.address ORDER BY district ASC, address DESC;
################################################################################################




################################################################################################
/*Para os exercícios a seguir, vamos usar a tabela sakila.film:

    - Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
    - Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento
    e sua classificação.
    - Quantos filmes temos cadastrados?*/
SELECT * FROM sakila.film;
SELECT title, release_year, rating FROM sakila.film;
SELECT COUNT(*) FROM sakila.film;
################################################################################################




################################################################################################
/*Para os exercícios a seguir, vamos usar a tabela sakila.actor:

    Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.
    Quantos sobrenomes únicos temos na tabela?
    Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.
*/
DESCRIBE sakila.actor;
SELECT DISTINCT last_name FROM sakila.actor;
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
SELECT * FROM sakila.actor ORDER BY last_name ASC, first_name DESC;
################################################################################################




################################################################################################
/*
 Usando a tabela language:

    Crie uma pesquisa que mostre os 5 idiomas cadastrados, mas não mostre o idioma english.
*/
SELECT * FROM sakila.language WHERE 'English' != name;
################################################################################################




################################################################################################
/*
 Usando a tabela film:

    Selecione todos os dados da tabela. Pronto, fez isso?
    Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os 20 primeiros filmes,
    incluindo o título, o ano de lançamento, a duração, a classificação indicativa e o custo de
    substituição. Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo
    de substituição.
*/
SELECT * FROM sakila.film;
SELECT title, release_year, rental_duration, rating, replacement_cost FROM sakila.film
ORDER BY rental_duration ASC, replacement_cost DESC
LIMIT 20;

/*
#https://stackoverflow.com/questions/4974639/is-mysql-limit-applied-before-or-after-order-by
#https://stackoverflow.com/questions/4708708/how-does-mysql-process-order-by-and-limit-in-a-query
#https://stackoverflow.com/questions/33909911/how-to-orderby-after-applying-limit-in-sql
#https://www.daniweb.com/programming/web-development/threads/386722/mysql-query-i-want-to-put-a-limit-before-order-is-that-possible
The limit is always applied at the end of result gathering, therefore after order by.
Given all your clauses, the order of processing will be
    FROM
    WHERE
    SELECT
    ORDER BY
    LIMIT
*/