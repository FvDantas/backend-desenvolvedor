```SQL

-- CRIANDO A TABELA DISPONÍVEL

CREATE TABLE Produtos (
	ProdutoID INTEGER PRIMARY KEY AUTOINCREMENT ,
  	Nome_do_Produto VARCHAR(255),
  	Preço DOUBLE,
  	Quantidade_em_Estoque INT
)

--INSERÇÃO DOS DADOS NA TABELA Produtos

INSERT INTO Produtos (nome_do_produto,preço,quantidade_em_estoque) 
VALUES 
('SMARTPHONE', 799.99,20),
('TABLET', 349.99,10),
('FONE DE OUVIDO', 49.99,50)

--ATUALIZAÇÃO DE ESTOQUE COM UPDATE

UPDATE Produtos SET preço = 849.99,quantidade_em_estoque = 25 WHERE produtoid = 1

--SIMULAÇÃO DE VENDA 

UPDATE Produtos set quantidade_em_estoque = quantidade_em_estoque - 5 WHERE nome_do_produto = 'TABLET'

UPDATE Produtos set quantidade_em_estoque = quantidade_em_estoque - 10 WHERE nome_do_produto = 'FONE DE OUVIDO'



SELECT * FROM Produtos
```
