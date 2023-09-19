## Instruções
Com base no que estudamos, escolha dois objetos materiais e dois abstratos. Em seguida, faça uma lista com, pelo menos, três atributos e três métodos para
cada tipo de objeto. Para finalizar, demonstre esses objetos em JavaScript e exemplifique as suas características e ações.

## Criando Objetos MATERIAIS
Foram criados dois objetos materiais: 

Carro:
-  Possuirá os atributos: Marca, modelo e ano	
-  Possuirá os métodos: Ligar, Desligar e acelerar
  
Livro:
- Possuirá os atributos: Título, autor e ano de publicação
- Possuirá os métodos: Abrir, fechar e ler página

  ### Exemplificando em JS - Objeto Carro

 ``` javascript
  class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.velocidadeAtual = 0;
    this.ligado = false;
  }

  ligar() {
    this.ligado = true;
    console.log(`O carro ${this.marca} ${this.modelo} está ligado.`);
  }

  desligar() {
    this.ligado = false;
    console.log(`O carro ${this.marca} ${this.modelo} está desligado.`);
  }

  acelerar(velocidade) {
    if (this.ligado) {
      this.velocidadeAtual += velocidade;
      console.log(`O carro está agora a ${this.velocidadeAtual} km/h.`);
    } else {
      console.log(`Você precisa ligar o carro primeiro.`);
    }
  }
}
const meuCarro = new Carro('Toyota', 'Corolla', 2022);
meuCarro.ligar();
meuCarro.acelerar(60);
meuCarro.desligar();
```
 ### Exemplificando em JS - Objeto Livro

 ```javascript

 class Livro {
  constructor(titulo, autor, anoPublicacao) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    this.paginas = 0;
    this.aberto = false;
  }

  abrir() {
    this.aberto = true;
    console.log(`O livro "${this.titulo}" está aberto.`);
  }

  fechar() {
    this.aberto = false;
    console.log(`O livro "${this.titulo}" está fechado.`);
  }

  lerPagina() {
    if (this.aberto) {
      this.paginas++;
      console.log(`Você está na página ${this.paginas} de "${this.titulo}".`);
    } else {
      console.log(`Abra o livro "${this.titulo}" antes de ler.`);
    }
  }
}

const meuLivro = new Livro('Aventuras de Sherlock Holmes', 'Arthur Conan Doyle', 1892);
meuLivro.abrir();
meuLivro.lerPagina();
meuLivro.fechar();
```

## Criando Objetos ABSTRATOS
Foram criados dois objetos abstratos: 

Conta bancária:
-  Possuirá os atributos: titular, saldo inicial e número da conta	
-  Possuirá os métodos: Depositar, sacar, e Mostrar saldo 
  
Rede Social:
- Possuirá os atributos: Nome, fundador e usuário
- Possuirá os métodos: Adicionar, remover e listar

  ### Exemplificando em JS - Objeto Conta bancária

  ```javascript
  class ContaBancaria {
    constructor(titular, saldoInicial,numeroConta) {
      this.titular = titular;
      this.saldo = saldoInicial;
      this.nConta = numeroConta;
    }

    mostrarconta(){
        console.log(`${this.titular} possui a conta de numero ${this.numeroConta}!`);
    }
  
    depositar(valor) {
      this.saldo += valor;
      console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    }
  
    sacar(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
      } else {
        console.log(`Saldo insuficiente para sacar R$${valor}`);
      }
    }
  
    consultarSaldo() {
      console.log(`Saldo atual da conta de ${this.titular}: R$${this.saldo}`);
    }
  }
  
  const minhaConta = new ContaBancaria('João', 1000, 400237);
  minhaConta.mostrarconta();
  minhaConta.consultarSaldo();
  minhaConta.depositar(500);
  minhaConta.sacar(200);
  ```
   ### Exemplificando em JS - Objeto Rede social

```javascript
  class RedeSocial {
  constructor(nome, fundador, usuarios) {
    this.nome = nome;
    this.fundador = fundador;
    this.usuarios = usuarios;
  }

  adicionarUsuario(usuario) {
    this.usuarios.push(usuario);
    console.log(`Usuário ${usuario} adicionado à rede social ${this.nome}.`);
  }

  removerUsuario(usuario) {
    const index = this.usuarios.indexOf(usuario);
    if (index !== -1) {
      this.usuarios.splice(index, 1);
      console.log(`Usuário ${usuario} removido da rede social ${this.nome}.`);
    } else {
      console.log(`Usuário ${usuario} não encontrado na rede social ${this.nome}.`);
    }
  }

  listarUsuarios() {
    console.log(`Usuários da rede social ${this.nome}: ${this.usuarios.join(', ')}`);
  }
}

const facebook = new RedeSocial('Facebook', 'Markinho Zuckerberg', ['Jorge', 'Maria', 'Jose']);
facebook.listarUsuarios();
facebook.adicionarUsuario('David');
facebook.removerUsuario('Jorge');
```

