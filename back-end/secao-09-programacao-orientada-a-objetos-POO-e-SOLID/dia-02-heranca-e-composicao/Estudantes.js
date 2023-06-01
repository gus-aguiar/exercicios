"use strict";
class Estudantes {
    constructor(matricula, nome, email, notasExames, notasTrabalhos) {
        this._notasExames = [];
        this._notasTrabalhos = [];
        this.mediaExames = () => {
            let notasTotais = [...this._notasExames, ...this._notasTrabalhos];
            let mediaExames = 0;
            for (let i = 0; i < notasTotais.length; i++) {
                mediaExames += notasTotais[i];
            }
            return mediaExames / notasTotais.length;
        };
        this.somaExames = () => {
            let notasTotais = [...this.notasExames, ...this.notasTrabalhos];
            let somaExames = 0;
            for (let i = 0; i < notasTotais.length; i++) {
                somaExames += notasTotais[i];
            }
            return somaExames;
        };
        this._matricula = matricula;
        this._nome = nome;
        this._email = email;
        this.notasExames = notasExames;
        this.notasTrabalhos = notasTrabalhos;
    }
    get matricula() {
        return this._matricula;
    }
    set matricula(value) {
        this._matricula = value;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get notasExames() {
        return this._notasExames;
    }
    set notasExames(value) {
        if (value.length !== 4) {
            throw new Error('O número de notas de exame deve ser igual a 4');
        }
        this._notasExames = value;
    }
    get notasTrabalhos() {
        return this._notasTrabalhos;
    }
    set notasTrabalhos(value) {
        if (value.length !== 2) {
            throw new Error('O número de notas de trabalho deve ser igual a 2');
        }
        this._notasTrabalhos = value;
    }
}
const Estudante1 = new Estudantes('123456', 'João', 'joao@gmail.com', [10, 10, 10, 10], [10, 10]);
// console.log(Estudante1);
console.log(Estudante1.somaExames());
console.log(Estudante1.mediaExames());
console.log('teste');
