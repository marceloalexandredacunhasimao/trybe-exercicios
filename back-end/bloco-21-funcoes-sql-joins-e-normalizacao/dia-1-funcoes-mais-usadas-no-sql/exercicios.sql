#SHOW DATABASES;
#SHOW TABLES FROM hr;
SELECT * FROM hr.employees;

SELECT FIRST_NAME, MAX(SALARY) AS 'Maior salário' FROM hr.employees; #1
SELECT MAX(SALARY)-MIN(SALARY) AS 'Diferença entre maior e menor salário' FROM hr.employees; #2
#3. Escreva uma query que exiba a média salarial de cada JOB_ID, ordenando pela média salarial em ordem decrescente.
SELECT JOB_ID, AVG(SALARY) AS MEDIA FROM hr.employees GROUP BY JOB_ID ORDER BY AVG(SALARY) DESC; #3
#4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT SUM(SALARY) AS 'PG TOTAL' FROM hr.employees; #4
/*5. 🚀 Escreva uma query que exiba quatro informações:
o maior salário, o menor salário, a soma de todos os salários e a média dos salários.
Todos os valores devem ser formatados para ter apenas duas casas decimais.*/
SELECT ROUND(MAX(SALARY),2) AS MAIOR,
ROUND(MIN(SALARY),2) AS MENOR,
ROUND(SUM(SALARY),2) AS SOMA,
ROUND(AVG(SALARY),2) AS 'MÉDIA'
FROM hr.employees; #5
#6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (IT_PROG).
SELECT COUNT(JOB_ID) AS 'Nº DE PROG' FROM hr.employees WHERE JOB_ID = 'IT_PROG'; #6
#7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (JOB_ID).
SELECT JOB_ID, SUM(SALARY) TOTAL FROM hr.employees GROUP BY JOB_ID; #7
#8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (IT_PROG).
SELECT JOB_ID, SUM(SALARY) TOTAL FROM hr.employees GROUP BY JOB_ID HAVING JOB_ID = 'IT_PROG'; #8
#9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (IT_PROG).
SELECT JOB_ID, AVG(SALARY) AS MEDIA FROM hr.employees
WHERE JOB_ID <> 'IT_PROG' GROUP BY JOB_ID
ORDER BY AVG(SALARY) DESC; #9
/*10. 🚀 Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos
com mais de dez funcionários. Dica: agrupe pelo DEPARTMENT_ID.*/
SELECT DEPARTMENT_ID, AVG(SALARY) AS 'average_salary', COUNT(*) AS 'number of employees'
FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING `number of employees` > 10; #10
/*11. 🚀 Escreva uma query que atualize a coluna PHONE_NUMBER, de modo que todos os telefones iniciados por
515 agora devem iniciar com 777.*/
SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees
SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515.', '777.')
WHERE PHONE_NUMBER LIKE '515%';
SET SQL_SAFE_UPDATES = 1; #11
/*12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou
mais caracteres.*/
SELECT * FROM hr.employees WHERE CHAR_LENGTH(FIRST_NAME) >= 8; #12
/*13. Escreva uma query que exiba as seguintes informações de cada funcionário:
id, primeiro nome e ano no qual foi contratado (exiba somente o ano).*/
SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) 'HIRE_YEAR' FROM hr.employees; #13
/*14. 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário:
id, primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).*/
SELECT EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) 'HIRE_DAY' FROM hr.employees; #14
/*15. Escreva uma query que exiba as seguintes informações de cada funcionário:
id, primeiro nome e mês no qual foi contratado (exiba somente o mês).*/
SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) 'HIRE_MONTH' FROM hr.employees;
#16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT UCASE(CONCAT(FIRST_NAME, ' ', LAST_NAME)) AS NOME FROM hr.employees;
/*17. Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionários
contratados em julho de 1987.*/
SELECT LAST_NAME, HIRE_DATE FROM hr.employees WHERE YEAR(HIRE_DATE) = 1987 AND MONTH(HIRE_DATE) = 7;
SELECT LAST_NAME, HIRE_DATE FROM hr.employees WHERE HIRE_DATE BETWEEN '1987-07-01' AND '1987-07-31';
SELECT LAST_NAME, HIRE_DATE FROM hr.employees WHERE HIRE_DATE LIKE '1987-07-%';
SELECT LAST_NAME, HIRE_DATE FROM hr.employees WHERE SUBSTRING(HIRE_DATE,1,7) = '1987-07';
/*18: Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome,
tempo que trabalha na empresa (em dias).*/
SELECT FIRST_NAME, LAST_NAME, DATEDIFF(CURRENT_DATE(), HIRE_DATE) AS 'DAYS_WORKED' FROM hr.employees;
