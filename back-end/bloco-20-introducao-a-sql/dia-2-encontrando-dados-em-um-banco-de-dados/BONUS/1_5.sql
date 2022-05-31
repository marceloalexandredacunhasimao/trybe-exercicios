/*
    1. Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT.
    2. Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.
    3. Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores
    preços, começando a lista a partir do 3º item.
    4. Escreva uma query para exibir todas as informações das peças que são providas pela empresa
    HAL. Ordene o resultado pelos preços das peças de forma decrescente.
    5. Escreva uma query para exibir por quantas empresas a peça 1 é provida.
*/
/*
USE PiecesProviders;
SHOW TABLES;
DESCRIBE PiecesProviders.Pieces;

SELECT * FROM PiecesProviders.Pieces;
SELECT * FROM PiecesProviders.Providers;
SELECT * FROM PiecesProviders.Provides;
*/

SELECT Piece, Price FROM PiecesProviders.Provides WHERE Provider = 'RBT';

SELECT * FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 5;

SELECT DISTINCT Provider, Price FROM PiecesProviders.Provides
ORDER BY Price DESC
LIMIT 4
OFFSET 2;

SELECT * FROM PiecesProviders.Provides
WHERE Provider = 'HAL'
ORDER BY Price DESC;

#5. Escreva uma query para exibir por quantas empresas a peça 1 é provida.

SELECT COUNT(Provider) AS 'Número de empresas que proveem a peça 1'
FROM PiecesProviders.Provides
WHERE Piece = 1;
