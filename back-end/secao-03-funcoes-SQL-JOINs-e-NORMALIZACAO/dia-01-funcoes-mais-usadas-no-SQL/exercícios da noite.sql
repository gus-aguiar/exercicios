-- 1. Escreva uma query que exiba o maior salário da tabela.

SELECT MAX(max_salary)
FROM hr.jobs;

-- 2. 🚀 Escreva uma query que exiba a diferença entre o maior e o menor salário.

SELECT MAX(max_salary) - MIN(min_salary)
FROM hr.jobs;

-- 3. 🚀 Escreva uma query que exiba a média salarial de cada job_id, ordenando pela média salarial em ordem decrescente.

SELECT job_id, (min_salary + max_salary)/2  AS media
FROM hr.jobs
GROUP BY job_id
ORDER BY media DESC;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.

SELECT SUM(salary) FROM hr.employees;

-- 5. 🚀 Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.

SELECT ROUND(MAX(salary), 2), ROUND(MIN(salary), 2),  ROUND(SUM(salary),2), ROUND(AVG(salary),2) FROM hr.employees;

-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (it_prog).

-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (job_id).

-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (it_prog).

-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (it_prog).

-- 10. 🚀 Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id.

SELECT ROUND(AVG(salary),2)  AS salario, 
COUNT(*) AS n_funcionarios
FROM employees
GROUP BY department_id
HAVING n_funcionarios > 1;

-- 11. 🚀 Escreva uma query que atualize a coluna phone_number, de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.

SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees 
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

SELECT * FROM hr.employees;

SET SQL_SAFE_UPDATES = 1;


-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.

-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e ano no qual foi contratado (exiba somente o ano).

-- 14. 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).

SELECT employee_id, first_name, DAYOFMONTH(hire_date) FROM hr.employees;

-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e mês no qual foi contratado (exiba somente o mês).

-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.

-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.

-- 18: 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa (em dias).

SELECT * FROM hr.employees;

SELECT first_name, last_name, DATEDIFF(NOW(), hire_date) FROM hr.employees;

