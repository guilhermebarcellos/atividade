class Veiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  ligar() {
    console.log(`${this.marca} ${this.modelo} está ligado.`);
  }
}

class Moto extends Veiculo {
  constructor(marca, modelo, cilindradas) {
    super(marca, modelo); 
    this.cilindradas = cilindradas;
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo, portas) {
    super(marca, modelo); 
    this.portas = portas;
  }
}

const moto = new Moto("Honda", "CB500", 500);
const carro = new Carro("Toyota", "Corolla", 4);

moto.ligar();
console.log(`Moto: ${moto.marca}, ${moto.modelo}, ${moto.cilindradas}cc`);

carro.ligar();
console.log(`Carro: ${carro.marca}, ${carro.modelo}, ${carro.portas} portas`);