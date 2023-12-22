## MODELO ENTIDADE RELACIONAMENTO (MER)
![MER](https://github.com/FvDantas/backend-desenvolvedor/blob/d529ebee052e6cdbb66a9bebe8ecabbe05ecf26d/Banco_de_Dados/MER_FAP_TRABALHO1.png)

## MODELO LÓGICO
Tabelas:

  - Livro
    
ID_ISBN (PK, VARCHAR), Título (VARCHAR), AnoPublicacao (INT), QuantidadeEstoque (INT).

  - Autor
    
AutorID (PK, INT), NomeAutor (VARCHAR), PaisOrigem (VARCHAR).

  - Usuário
    
UserID (PK, INT), NomeUsuario (VARCHAR), Endereco (VARCHAR), Email (VARCHAR).

  - Empréstimo

EmpréstimoID (PK, INT), DataEmpréstimo (DATE), DataDevolucaoPrevista (DATE), UserID (FK).

  -Devolução

DevolucaoID (PK, INT), DataDevolucao (DATE), EmpréstimoID (FK).

## MODELO FÍSICO

```sql

CREATE DATABASE biblioteca;

USE biblioteca;

-- Tabela Livro
CREATE TABLE Livro (
    ID_ISBN VARCHAR(13) PRIMARY KEY,
    Titulo VARCHAR(255),
    AnoPublicacao INT,
    QuantidadeEstoque INT
);

-- Tabela Autor
CREATE TABLE Autor (
    AutorID INT PRIMARY KEY,
    NomeAutor VARCHAR(255),
    PaisOrigem VARCHAR(100)
);

-- Tabela Usuário
CREATE TABLE Usuario (
    UserID INT PRIMARY KEY,
    NomeUsuario VARCHAR(255),
    Endereco VARCHAR(255),
    Email VARCHAR(255)
);

-- Tabela Empréstimo
CREATE TABLE Emprestimo (
    EmprestimoID INT PRIMARY KEY,
    DataEmprestimo DATE,
    DataDevolucaoPrevista DATE,
    UserID INT,
    FOREIGN KEY (UserID) REFERENCES Usuario(UserID)
);

-- Tabela Devolucao
CREATE TABLE Devolucao (
    DevolucaoID INT PRIMARY KEY,
    DataDevolucao DATE,
    EmprestimoID INT,
    FOREIGN KEY (EmprestimoID) REFERENCES Emprestimo(EmprestimoID)
);

-- Tabela Livro_Emprestimo (Relacionamento N:M)
CREATE TABLE Livro_Emprestimo (
    ID_ISBN VARCHAR(13),
    EmprestimoID INT,
    QuantidadeEmprestada INT,
    PRIMARY KEY (ID_ISBN, EmprestimoID),
    FOREIGN KEY (ID_ISBN) REFERENCES Livro(ID_ISBN),
    FOREIGN KEY (EmprestimoID) REFERENCES Emprestimo(EmprestimoID)
);

```
