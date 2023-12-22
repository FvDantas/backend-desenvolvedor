```sql
-- 01 - CRIANDO O BD
create database BlogDB;

use BlogDB;
 -- 02 - CRIANDO AS TABELAS
 
 create table Autor (
	  AutorID int primary key,
    Nome varchar(255),
    Email varchar(255)
 );
 
create table Post (
	  PostID int primary key,
    Titulo VARCHAR(255),
    Conteudo TEXT,
    DataPublicacao DATE,
    AutorID INT,
    
    foreign key (AutorID) references Autor(AutorID)
);

create table Comentario (
	  ComentarioID int primary key,
    TextoComentario text,
    DataComentario date,
    AutorID int,
    PostID int,
    foreign key (AutorID) references Autor(AutorID),
	  foreign key (PostID) references Post(PostID)
);

-- 03 - DEFININDO RELACIONAMENTOS
-- relacionamento entre Autor e Post

ALTER TABLE Post
add constraint FK_Post_Autor
foreign key (AutorID) references Autor(AutorID);

-- relacionamento entre Autor e Comentario

ALTER TABLE Comentario
add constraint FK_Comentario_Autor
foreign key (AutorID) references Autor(AutorID);

-- relacionamento entre Post e Comentario

ALTER TABLE Comentario
add constraint FK_Comentario_Post
foreign key (PostID) references Post(PostID);
```
