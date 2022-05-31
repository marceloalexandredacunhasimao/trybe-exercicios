/*
9. Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído."
para cada projeto.
10. Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
11. Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
12. Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
*/
USE Scientists;
SHOW TABLES;

DESCRIBE Scientists.Projects;
SELECT CONCAT('O projeto "',Name,'" precisou de ',Hours,' horas para ser concluído.') AS Resultado
FROM Scientists.Projects;

SELECT * FROM
	(
	SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3
    )
a ORDER BY Hours;

DESCRIBE Scientists.AssignedTo;
SELECT DISTINCT Project FROM Scientists.AssignedTo;

SELECT Name FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1;