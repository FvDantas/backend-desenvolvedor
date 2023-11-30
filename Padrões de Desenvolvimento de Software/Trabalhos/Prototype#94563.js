
class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }

    clone() {
        
        const newVeiculo = Object.create(this);
        return newVeiculo;
    }

    represent() {
        return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}`;
    }
}


class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
        super(modelo, marca, cor, numeroRodas);
        this.numeroPortas = numeroPortas;
    }

    represent() {
        return `${super.represent()}, Portas: ${this.numeroPortas}`;
    }
}


class Moto extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, tipo) {
        super(modelo, marca, cor, numeroRodas);
        this.tipo = tipo;
    }

    represent() {
        return `${super.represent()}, Tipo: ${this.tipo}`;
    }
}


class Implement {
    constructor() {
        this.veiculos = [];
        this.clones = [];
    }

    createVeiculos() {
        this.veiculos.push(new Carro("Gol", "Volksvagem", "Azul", 4, 4));
        this.veiculos.push(new Moto("CG 150", "Honda", "Vermelho", 2, "Basica"));
        this.veiculos.push(new Carro("Uno Mile", "Fiat", "Azul", 4, 2));
        this.veiculos.push(new Moto("Biz", "Honda", "Preto", 2, "Basica"));
        this.veiculos.push(new Carro("Onix", "Chevrolet", "Branco", 4, 4));
        this.veiculos.push(new Moto("Bros", "Honda", "Amarelo", 2, "Intermediaria"));
    }

    cloneVeiculos() {
        this.clones = this.veiculos.map(veiculo => veiculo.clone());
    }

    representateClones() {
        this.clones.forEach(clone => {
            console.log(clone.represent());
        });
    }
}


const Implementacao = new Implement();
Implementacao.createVeiculos();
Implementacao.cloneVeiculos();
Implementacao.representateClones();