SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM
    sakila.customer AS c
        LEFT JOIN
    sakila.actor AS a ON c.last_name = a.last_name
ORDER BY c.last_name;


SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM
    sakila.customer AS c
        RIGHT JOIN
    sakila.actor AS a ON c.last_name = a.last_name
ORDER BY c.last_name;



SELECT
    CONCAT(Employee.first_name, " ", Employee.last_name) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
FROM
    hr.employees AS Employee
INNER JOIN
    hr.employees AS Manager ON Employee.manager_id = Manager.employee_id;
    
-- --------------------------------EXEMPLOS /\-------------------------------

-- Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.

SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;

SELECT 
    a.actor_id,
    CONCAT(a.first_name, ' ', a.last_name),
    f.film_id,
    f.actor_id
FROM
    sakila.actor AS a
        INNER JOIN
    sakila.film_actor AS f ON a.actor_id = f.actor_id;
    
-- Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.

SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;

SELECT 
    a.first_name,
    a.last_name,
    a.address_id,
    b.address,
    b.address_id
FROM
    sakila.staff AS a
        INNER JOIN
    sakila.address AS b ON a.address_id = b.address_id;

-- Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.

SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT 
    a.customer_id,
    a.first_name,
    a.email,
    a.address_id,
    b.address_id,
    b.address
FROM
    sakila.customer AS a
        INNER JOIN
    sakila.address AS b ON a.address_id = b.address_id;

-- Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm “rene” em seus nomes. As informações podem ser encontradas nas tabelas address e customer.

SELECT 
    a.customer_id,
    a.first_name,
    a.email,
    a.address_id,
    b.address_id,
    b.address,
    b.district
FROM
    sakila.customer AS a
        INNER JOIN
    sakila.address AS b ON a.address_id = b.address_id
WHERE
    b.district = 'California'
        AND a.first_name LIKE '%rene%';

-- Exiba o nome, o sobrenome e a quantidade de filmes alugados por cada cliente cadastrado. Ordene seus resultados por nome e sobrenome de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas nas tabelas customer e rental.

SELECT * FROM sakila.customer;
SELECT * FROM sakila.rental;

SELECT 
    a.first_name,
    a.last_name,
    a.customer_id,
    a.active,
    COUNT(b.customer_id)
FROM
    sakila.customer AS a
        INNER JOIN
    sakila.rental AS b ON a.customer_id = b.customer_id
WHERE
    a.active = 1
GROUP BY b.customer_id
ORDER BY a.first_name DESC , a.last_name DESC;

-- Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.

SELECT * FROM sakila.staff;
SELECT * FROM sakila.payment;
SELECT 
    a.first_name, a.last_name, AVG(b.amount)
FROM
    sakila.staff AS a
        INNER JOIN
    sakila.payment AS b ON a.staff_id = b.staff_id
WHERE
    YEAR(b.payment_date) = 2006
GROUP BY a.staff_id;

-- Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.

SELECT 
    *
FROM
    sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.film;