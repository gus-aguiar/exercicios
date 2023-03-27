-- Precisamos identificar os dados do cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org. As informações podem ser encontradas na tabela customer
SELECT * 
FROM sakila.customer 
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
-- Precisamos de um relatório dos nomes dos clientes, em ordem alfabética, que não estão mais ativos no nosso sistema e pertencem à loja com o id = 2, e não inclua o cliente KENNETH no resultado. As informações podem ser encontradas na tabela customer
SELECT * 
FROM sakila.customer
WHERE active = '1'
AND store_id = '2'
AND first_name <> '%KENNETH%' ;
-- O setor financeiro quer saber título, descrição, ano de lançamento, classificação etária (rating) e valor do custo de substituição (replacement_cost), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em ordem alfabética pelo título. As informações podem ser encontradas na tabela film
SELECT title, description, release_year, rating, replacement_cost 
FROM sakila.film 
WHERE rating = 'G' 
AND replacement_cost > '18.00' 
ORDER BY replacement_cost DESC, title ASC  
LIMIT 100;
-- Quantos clientes estão ativos e na loja 1? As informações podem ser encontradas na tabela customer
SELECT COUNT(*) 
FROM sakila.customer 
WHERE store_id = 1 
AND active IS TRUE;
-- Mostre todos os detalhes dos clientes que não estão ativos na loja 1. As informações podem ser encontradas na tabela customer
SELECT * 
FROM sakila.customer
WHERE store_id = 1 
AND active IS FALSE;
-- Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a menor taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em ordem alfabética pelo título. As informações podem ser encontradas na tabela film
SELECT * 
FROM sakila.film 
WHERE rating = 'NC-17' 
ORDER BY rental_rate DESC, title ASC 
LIMIT 50;
-- Mostre todos os detalhes dos filmes que contêm a palavra ace no nome.
SELECT * 
FROM sakila.film 
WHERE title LIKE '%ACE%';
-- Mostre todos os detalhes dos filmes cujas descrições finalizam com china.
SELECT *
FROM sakila.film 
WHERE title LIKE '%CHINA';
-- Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl e o título finaliza com a palavra lord.
SELECT * 
FROM sakila.film 
WHERE description LIKE '%GIRL%' 
AND title LIKE '%LORD';
-- Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra gon.
SELECT * 
FROM sakila.film 
WHERE title LIKE '___GON%';
-- Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra gon e a descrição contém a palavra Documentary.
SELECT * 
FROM sakila.film 
WHERE title LIKE '___GON%' 
AND description LIKE '%Documentary%';
-- Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito.
SELECT * 
FROM sakila.film 
WHERE title LIKE '%academy' 
OR title LIKE 'mosquito%';
-- Mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições.
SELECT * 
FROM sakila.film 
WHERE description LIKE '%monkey%' 
OR title LIKE '%sumo%';
-- Como você faria, então, para encontrar, usando o IN, todos os detalhes sobre o aluguel dos clientes com os seguintes ids: 269, 239, 126, 399, 142? As informações podem ser encontradas na tabela payment.
SELECT * 
FROM sakila.payment 
WHERE customer_id IN(269, 239, 126, 399, 142);
-- Como encontraria todas as informações sobre os endereços que estão registrados nos distritos de QLD, Nagasaki, California, Attika, Mandalay, Nantou e Texas? As informações podem ser encontradas na tabela address.
SELECT * 
FROM sakila.address 
WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');
-- Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy, ordenados por nome em ordem alfabética.
SELECT first_name, last_name, email 
FROM sakila.customer 
WHERE last_name 
IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales' 'kennedy') 
ORDER BY first_name ASC;
-- Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176, ordenados em ordem alfabética.
SELECT email 
FROM sakila.customer 
WHERE address_id 
BETWEEN 172 AND 176;
-- Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005. Lembre-se d/e que, no banco de dados, as datas estão armazenadas no formato ano/mês/dia, diferente do formato brasileiro, que é dia/mês/ano.
SELECT COUNT(*) 
FROM sakila.payment
WHERE payment_date 
BETWEEN '2005/05/01'AND '2005/08/01';
-- Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6. Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro. Em caso de empate, ordene em ordem alfabética pelo título.

-- Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para as classificações indicativas G, PG e PG-13. Os resultados devem estar ordenados por título.