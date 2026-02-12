class Time{
    constructor(nomedotime){
        this.nome = nomedotime
        this.vitorias = 15
        this.derrotas = 5
        this.empates = 2
        this.golsMarcados = 294
        this.golsSofridos = 145
    }

    calculaPontos(){
        let pontos = this.vitorias * 3 + this.empates
        return pontos
    }

    calculaSaldo(){
        let saldo = this.golsMarcados - this.golsSofridos
        return saldo
    }

    registrarFimDeJogo(golsPro, golsContra){
        this.golsMarcados += golsPro
        this.golsSofridos += golsContra

        if(golsPro > golsContra){
            this.vitorias ++
        }else if(golsContra > golsPro){
            this.derrotas ++
        }else{
            this.empates ++
        }
    }
}

class Partida{
    constructor(mandante, visitante){
        this.mandante = mandante
        this.visitante = visitante
    }

    jogar(golsM, golsV){
        this.mandante.registrarFimDeJogo(golsM, golsV)
        this.visitante.registrarFimDeJogo(golsV, golsM)
    }
}


let time1 = new Time("flamengo")
let time2 = new Time("palmeras")

let partida = new Partida(time1, time2)
partida.jogar(5, 6)

console.log(time1)
console.log(time2)