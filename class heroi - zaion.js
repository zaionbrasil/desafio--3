class Heroi {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    atacar() {
        const ataques = {
            mago: 'usou magia',
            guerreiro: 'usou espada',
            monge: 'usou artes marciais',
            ninja: 'usou shuriken',
        };

        let ataque = ataques[this.type] || 'não possui um ataque definido';
        console.log(`O ${this.type} atacou usando ${ataque}`);
    }
}

let meuHeroi = new Heroi('Falcon', 25, 'guerreiro');
meuHeroi.atacar(); // Saída: "O guerreiro atacou usando usou espada"
