class Computador {
   getram() {}
   gethdd() {}
   getcpu() {}
   gettype() {}
   toString() {}

}

class pc extends Computador{
    getram (){
        return 'RAM: 16GB'
    }
    gethdd (){
        return 'HDD: 512GB'
    }
    getcpu (){
        return 'CPU: 2,9GHz'
    }
    gettype (){
        return 'PC'
    }
    toString (){
        return (`O computador é do tipo: ${this.gettype()} com as seguintes especificações -> ${this.getram()} , ${this.gethdd()} e ${this.getcpu()}.`)
    }
}

class server extends Computador{
    getram (){
        return 'RAM: 128GB'
    }
    gethdd (){
        return 'HDD: 40000GB'
    }
    getcpu (){
        return 'CPU: 4,9GHz'
    }
    gettype (){
        return 'Server'
    }
    toString (){
        return (`O computador é do tipo: ${this.gettype()} com as seguintes especificações -> ${this.getram()} , ${this.gethdd()} e ${this.getcpu()}.`)
    }
}

class FactoryInterface {
    CreateComputer(type){
        switch(type){
            case 'PC' :
                const PC = new pc(); 
                console.log(PC.toString());
                break;
            case 'Server' :
                const Server = new server();
                console.log(Server.toString());
                break;
            default : 
                console.log('Tipo de computador inválido!')
        }
    }
}

const computer = new FactoryInterface();
computer.CreateComputer('PC');
computer.CreateComputer('Server');
computer.CreateComputer('Relógio');
