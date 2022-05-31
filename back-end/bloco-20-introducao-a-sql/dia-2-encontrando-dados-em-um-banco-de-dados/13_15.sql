/*
13. Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
14. Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
15. Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number
se refira a quantidade de cientistas.
*/
USE Scientists;
SHOW TABLES;
DESCRIBE Scientists.Projects;
DESCRIBE Scientists.AssignedTo;

SELECT Name FROM Scientists.Projects
ORDER BY Hours ASC
LIMIT 1
OFFSET 1;

SELECT * FROM Scientists.Projects
ORDER BY Hours ASC
LIMIT 5;

SELECT CONCAT("Existem ",COUNT(Name)," cientistas na tabela Scientists.")
AS "Quantidade"
FROM Scientists.Scientists;