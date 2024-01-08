## CRIANDO O BD E TABELAS
```sql
CREATE DATABASE biblioteca;

-- Tabela "Autores"

CREATE TABLE Autores (
  AutorID INT PRIMARY KEY,
  Nome VARCHAR(255),
  Nacionalidade VARCHAR(255)
);

-- Tabela "Livros"

CREATE TABLE Livros (
  LivroID INT PRIMARY KEY,
  Titulo VARCHAR(255),
  AnoPublicacao INT,
  AutorID INT,
  FOREIGN KEY (AutorID) REFERENCES Autores(AutorID)
);
```

## REALIZANDO INSERÇÕES, CONSULTAS, JUNÇÕES E DOCUMENTANDO 


1. **Inserção de dados:**
```sql
-- Inserir autores
INSERT INTO Autores (Nome, Nacionalidade) VALUES
  ('Autor1', 'Nacionalidade1'),
  ('Autor2', 'Nacionalidade2'),
  ('Autor3', 'Nacionalidade3');

-- Inserir livros associados aos autores
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES
  ('Livro1', 2020, 1),
  ('Livro2', 2018, 1),
  ('Livro3', 2019, 2),
  ('Livro4', 2021, 2),
  ('Livro5', 2017, 3);
```
   - **Propósito:** Inserir registros nas tabelas "Autores" e "Livros" para criar dados de exemplo. 
   - **Resultado Esperado:** Três registros na tabela "Autores" e cinco registros na tabela "Livros" associados aos autores.

2. **Consulta simples:**
```sql
  SELECT * FROM Autores;
  SELECT * FROM Livros;
```
   - **Propósito:** Listar todos os autores e todos os livros.
   - **Resultado Esperado:** Uma lista de todos os autores e uma lista de todos os livros.

3. **Consulta com junção INNER JOIN:**
```sql
SELECT Autores.Nome AS NomeAutor, Livros.Titulo AS TituloLivro
FROM Autores
INNER JOIN Livros ON Autores.AutorID = Livros.AutorID;
```
   - **Propósito:** Listar os detalhes dos livros e seus autores correspondentes usando INNER JOIN.
   - **Resultado Esperado:** Uma lista que mostra o nome do autor e o título do livro correspondente para cada livro associado a um autor.

4. **Consulta com junção LEFT JOIN:**
```sql
   SELECT Autores.Nome AS NomeAutor, Livros.Titulo AS TituloLivro
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID;
```
   - **Propósito:** Exibir todos os autores, independentemente de terem livros associados. Incluir informações dos livros, se disponíveis.
   - **Resultado Esperado:** Uma lista que mostra o nome do autor e, se houver, o título do livro associado a cada autor.

5. **Consulta com filtro por nacionalidade:**
```sql
   SELECT Autores.Nome AS NomeAutor, Livros.Titulo AS TituloLivro
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID
WHERE Autores.Nacionalidade = 'Nacionalidade2';
```
   - **Propósito:** Listar os autores e seus livros, mas restrinja os resultados apenas aos autores de uma nacionalidade específica.
   - **Resultado Esperado:** Uma lista que mostra o nome do autor e o título do livro correspondente, apenas para autores de uma nacionalidade específica.

6. **Consulta agregada:**
```sql
   SELECT Autores.Nome AS NomeAutor, COUNT(Livros.LivroID) AS QtdLivros
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID
GROUP BY Autores.Nome;
```
   - **Propósito:** Contar quantos livros cada autor escreveu.
   - **Resultado Esperado:** Uma lista que mostra o nome do autor e a contagem de livros que cada autor escreveu.



