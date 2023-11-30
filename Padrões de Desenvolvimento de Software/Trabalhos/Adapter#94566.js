class Pato {
    somCaracPato(){
        return (`Quack, Quack!`)
    }

    voar(){
        return (`Pato voa!`)
    }
}

class Galinha {
    somCaracGalinha(){
        return (`pó pó pó`)
    }

    notVoar(){
        return (`Galinha n voa!`)
    }
}

class AdaptadorPato {
    constructor(pato){
        this.pato = pato;
    }

    somCaracGalinha(){
        this.pato.somCaracPato();
    }

    notVoar(){
        this.pato.voar()
    }
}

class AdaptadorPatoDemo {
    static main() {
        const pato = new Pato();
        const patoAdaptado = new AdaptadorPato(pato);
    
        console.log("\nUsando o Pato como uma Galinha através do Adaptador:");
        patoAdaptado.somCaracGalinha();
        patoAdaptado.notVoar();
      }
    }

 //instanciar   
AdaptadorPatoDemo.main();