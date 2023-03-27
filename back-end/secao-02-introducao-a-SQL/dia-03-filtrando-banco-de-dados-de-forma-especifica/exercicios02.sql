SELECT * FROM Scientists.Scientists;
SELECT * FROM Scientists.Projects;
SELECT * FROM Scientists.AssignedTo;
-- 1 - Escreva uma query para exibir a string “This is SQL Exercise, Practice and Solution”.
SELECT 'This is SQL Exercise, Practice and Solution';
-- 2 - Escreva uma query para exibir três números em três colunas.
SELECT 1, 2, 3 ;
-- 3 - Escreva uma query para exibir a soma dos números 10 e 15.
SELECT 10 + 15;
-- 4 - Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
SELECT 420 * 69;
-- 5 - Escreva uma query para exibir todas as informações de todos os cientistas.
SELECT * FROM Scientists.Scientists, Scientists.Projects, Scientists.AssignedTo;
-- 6 - Escreva uma query para exibir o nome como “Nome do Projeto” e as horas como “Tempo de Trabalho” de cada projeto.
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de trabalho' FROM Scientists.Projects;
-- 7 - Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
SELECT Name FROM Scientists.Scientists ORDER BY Name ASC;
-- 8 - Escreva uma query para exibir o nome dos projetos em ordem alfabética descendente.
SELECT Name FROM Scientists.Projects ORDER BY Name DESC;
-- 9 - Escreva uma query que exiba a string “O projeto Name precisou de Hours horas para ser concluído.” para cada projeto.
SELECT CONCAT("O Projeto ", Name, " precisou de ", Hours, " para ser concluído") FROM Scientists.Projects ;
-- 10 - Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;
-- 11 - Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.

-- 12 - Escreva uma query para exibir o nome do projeto com maior quantidade de horas.

-- 13- Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.

-- 14 - Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.

-- 15 - Escreva uma query que exiba a string “Existem Number cientistas na tabela Scientists.”, em que Number se refira a quantidade de cientistas.