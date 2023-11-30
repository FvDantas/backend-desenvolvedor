class Sanduiche{
    constructor(){
        this.descricao = "Sanduiche"
    }
    
    custo (){
        return 0; 
    }

    descreverSanduiche(){
        return this.descricao;
    }
}

class FrangoAssado extends Sanduiche {
    constructor(){
        super();
        this.descricao = `Sanduiche de Frango Assado`;
    }

    custo(){
        return 4.5;
    }


}

class Pepperoni extends Sanduiche{
    constructor(sanduiche){
        super();
        this.sanduiche = sanduiche;
    }

    custo(){
        return this.sanduiche.custo() + 0.99;
    }

    descreverSanduiche(){
        return this.sanduiche.descreverSanduiche() + `, Peperoni`;
    }
}

class QueijoMussarelaRalado extends Sanduiche{
    constructor(sanduiche){
        super();
        this.sanduiche = sanduiche;
    }

    custo(){
        return this.sanduiche.custo() + 2.00;
    }

    descreverSanduiche(){
        return this.sanduiche.descreverSanduiche() + `, QueijoMussarelaRalado`;
    }

}

const mmySanduba = new FrangoAssado();
const mySandubaWthDecorator = new QueijoMussarelaRalado(new Pepperoni(mmySanduba));

console.log(`Sanduiche de Carne, Bacon, QueijoMussarelaRalado custa $7,49.`)
console.log(`${mySandubaWthDecorator.descricaoDoSanduiche()} custa $${mySandubaWthDecorator.custo()}.`);