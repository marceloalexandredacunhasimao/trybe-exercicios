/*
5. Escreva uma query para exibir todas as informações de todos os cientistas.
6. Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
7. Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
8. Escreva uma query para exibir o nome dos projetos em ordem alfabética descendente.
*/
USE Scientists;
SHOW TABLES;

SELECT  * FROM Scientists.Scientists;

DESCRIBE Scientists.Projects;
SELECT Name AS "Nome do Projeto", Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;

DESCRIBE Scientists.Scientists;
SELECT Name FROM Scientists.Scientists ORDER BY Name ASC;

DESCRIBE Scientists.Projects;
SELECT Name FROM Scientists.Projects ORDER BY Name DESC;
