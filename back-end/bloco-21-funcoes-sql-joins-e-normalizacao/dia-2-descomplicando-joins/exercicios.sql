/*
Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais
(international_sales) de cada filme.
🚀 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme
que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais
(domestic_sales).
🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating)
em ordem decrescente.
Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que
não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas.
Retorne os nomes dos cinemas em ordem alfabética.
Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que
não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz.
Retorne os nomes dos cinemas em ordem alfabética.
🚀 Exercício 6: Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz
(possuem theater_id diferente de NULL) com avaliação maior que 8.
*/
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.Theater;
SELECT * FROM Pixar.BoxOffice;

#1
SELECT m.title, b.domestic_sales, b.international_sales
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id;

#2
SELECT m.title, b.domestic_sales, b.international_sales, (b.domestic_sales + b.international_sales) AS total
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
WHERE b.international_sales > b.domestic_sales;

#3
SELECT m.title, b.rating
FROM Pixar.Movies as m
INNER JOIN Pixar.BoxOffice as b
ON m.id = b.movie_id
ORDER BY b.rating DESC;

#4
SELECT t.id AS theater_id, t.name, t.location, m.id, m.title, m.director, m.year, m.length_minutes, m.theater_id
FROM Pixar.Theater AS t
LEFT JOIN Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY t.name ASC;

#5
SELECT t.id AS th_id, t.name, t.location,
m.id, m.title, m.director, m.year, m.length_minutes, m.theater_id
FROM Pixar.Theater AS t
RIGHT JOIN Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY t.name ASC;

#6
/*#🚀 Exercício 6: Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz
(possuem theater_id diferente de NULL) com avaliação maior que 8.
*/
SELECT m.id, m.title, m.director, m.year, m.length_minutes, m.theater_id, b.rating
FROM Pixar.Movies AS m
INNER JOIN Pixar.Theater AS t
ON t.id = m.theater_id
INNER JOIN Pixar.BoxOffice AS b
ON b.movie_id = m.id
WHERE b.rating > 8;
/*
#Gabarito:
USE Pixar;
SELECT 
    m.id,
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    m.theater_id
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
WHERE
    b.rating > 8
        AND m.theater_id IS NOT NULL;
*/
