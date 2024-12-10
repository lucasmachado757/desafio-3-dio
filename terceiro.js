const readline = require('readline'); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        let dano;

        if (this.tipo === 'mago') {
            ataque = 'magia';
            dano = Math.floor(Math.random() * 20) + 10; 
        } else if (this.tipo === 'guerreiro') {
            ataque = 'espada';
            dano = Math.floor(Math.random() * 15) + 15; 
        } else if (this.tipo === 'monge') {
            ataque = 'artes marciais';
            dano = Math.floor(Math.random() * 10) + 10; 
        } else if (this.tipo === 'ninja') {
            ataque = 'shuriken';
            dano = Math.floor(Math.random() * 25) + 5; 
        } else {
            ataque = 'ataque desconhecido';
            dano = 0;
        }

        console.log(`${this.nome}, o ${this.tipo}, atacou usando ${ataque} e causou ${dano} de dano.`);
    }
}

function criarHeroi() {
    rl.question('Digite o nome do herói: ', (nome) => {
        rl.question('Digite a idade do herói: ', (idade) => {
            rl.question('Escolha a classe do herói (guerreiro, mago, monge, ninja): ', (tipo) => {
                tipo = tipo.toLowerCase(); 

                if (['guerreiro', 'mago', 'monge', 'ninja'].includes(tipo)) {
                   
                    let heroi = new Heroi(nome, idade, tipo);

                    heroi.atacar();
                } else {
                    console.log("Classe inválida! Por favor, escolha entre 'guerreiro', 'mago', 'monge' ou 'ninja'.");
                }

                rl.close();
            });
        });
    });
}

criarHeroi();
