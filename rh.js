class Funcionario {
  #salarioBase;

  constructor(nome, salarioBase) {
    this.nome = nome;
    this.#salarioBase = salarioBase;
  }

  getSalario() {
    return this.#salarioBase;
  }
}

class Gerente extends Funcionario {
  constructor(nome, salarioBase) {
    super(nome, salarioBase);
  }

  calcularPagamento() {
    return this.getSalario() + (this.getSalario() * 0.20);
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, salarioBase) {
    super(nome, salarioBase);
  }

  calcularPagamento() {
    return this.getSalario();
  }
}

const gerente = new Gerente("João", 6000);
const dev = new Desenvolvedor("Maria", 4000);

console.log(`Gerente: ${gerente.nome} - Pagamento: R$ ${gerente.calcularPagamento()}`);
console.log(`Desenvolvedor: ${dev.nome} - Pagamento: R$ ${dev.calcularPagamento()}`);