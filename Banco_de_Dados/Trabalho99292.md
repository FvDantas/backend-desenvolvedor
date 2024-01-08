## CONSULTAS DQL 

Após a criação do BD e das tabelas, teremos as seguintes consultas QDL:

1. **Seleção de dados:**
   ```sql
   SELECT * FROM transacoes;
   ```
   - **Descrição:** Essa consulta retorna todos os dados da tabela de transações.

2. **Renomeando as colunas:**
   ```sql
   SELECT ID_Transacao AS ID, Data AS Data_Transacao, Valor AS Valor_Transacao FROM transacoes;
   ```
   - **Descrição:** Renomeia as colunas da tabela de transações para tornar os resultados mais descritivos, renomeando `ID_Transacao` para `ID`, `Data` para `Data_Transacao` e `Valor` para `Valor_Transacao`.

3. **Filtragem com WHERE:**
   ```sql
   SELECT * FROM transacoes WHERE Valor > 100.00;
   ```
   - **Descrição:** Seleciona apenas as transações com um valor superior a R$ 100,00.

4. **Ordenação com  ORDER BY:**
   ```sql
   SELECT * FROM transacoes ORDER BY Valor DESC;
   ```
   - **Descrição:** Ordena as transações por valor em ordem decrescente.

5. **Agregação com funções SQL:**
   ```sql
   SELECT AVG(Valor) AS Media, MAX(Valor) AS Valor_Maximo, MIN(Valor) AS Valor_Minimo, COUNT(*) AS Total_Transacoes FROM transacoes;
   ```
   - **Descrição:** Calcula a média, o valor máximo, o valor mínimo e o número total de transações.

6. **Agrupamento com GROUP BY:**
   ```sql
   SELECT Produto, AVG(Valor) AS Media_Valor_por_Produto FROM transacoes GROUP BY Produto;
   ```
   - **Descrição:** Agrupa as transações por produto e calcula a média de valor para cada produto.

7. **Consulta combinada:**
   ```sql
   SELECT Categoria, COUNT(*) AS Total_Produtos, SUM(Valor) AS Valor_Total_Vendas, AVG(Valor) AS Media_Valor_por_Transacao
   FROM transacoes
   GROUP BY Categoria;
   ```
   - **Descrição:**  Consulta combinada para obter insights sobre o desempenho 

## BREVE APRESENTAÇÃO 
  Com as consultas DQL podemos obter uma visão geral de desempenho dos produtos atrelados as suas transações e, chegar a conclusões para tomadas de decisões que trarão melhora, classificações e constatções. 
  Em que tal manipulação de dados, entregam vantagens diferenciais para qualquer empresa que deseja evoluir.
