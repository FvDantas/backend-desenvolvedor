const readline = require(`readline-sync`)
class opStrategy{
    execute(a,b) {}
}

class somaStrategy extends opStrategy{
    execute(a,b){
        return a+b;
    }
}
class subStrategy extends opStrategy{
    execute(a,b){
        return a-b;
    }
}
class multStrategy extends opStrategy{
    execute(a,b){
        return a*b;
    }
}

function calcStrategy() {
    const a = Number(read.question("Digite o primeiro número: "));
    const b = Number(read.question("Digite o segundo número: "));
    const op = readline.question("Escolha uma das operacoes destacadas entre parenteses (+, -, *): ");
  
    let strategy;
  
    switch (op) {
      case "+":
        strategy = new somaStrategy();
        break;
      case "-":
        strategy = new subStrategy();
        break;
      case "*":
        strategy = new multStrategy();
        break;
      default:
        console.log("Operação inválida");
        return;
    }
  
    const resultado = strategy.execute(a, b);
    console.log(`Resultado: ${resultado}`);
}