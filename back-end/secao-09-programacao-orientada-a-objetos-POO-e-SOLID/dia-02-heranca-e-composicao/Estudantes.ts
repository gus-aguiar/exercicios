import Person, { personParams } from "./Person";

class Estudantes extends Person{
    private _matricula: string;
    private _notasExames: number[] = [];
    private _notasTrabalhos: number[] = [];
    


    constructor(matricula: string, notasExames: number[], notasTrabalhos: number[] , params: personParams) {
        super(params);
        this._matricula = matricula;
        this.notasExames = notasExames;
        this.notasTrabalhos = notasTrabalhos;
    }

    public get matricula(): string {
        return this._matricula;
    }
    public set matricula(value: string) {
        this._matricula = value;
    }
    public get notasExames(): number[] {
        return this._notasExames;
    }
    public set notasExames(value: number[]) {
        if(value.length !== 4){
            throw new Error('O número de notas de exame deve ser igual a 4');
        }
        this._notasExames = value;
    }

    public get notasTrabalhos(): number[] {
        return this._notasTrabalhos;
    }
    public set notasTrabalhos(value: number[]) {
        if(value.length !== 2){
            throw new Error('O número de notas de trabalho deve ser igual a 2');
        }
        this._notasTrabalhos = value;
    }

    public mediaExames = (): number => {
        let notasTotais = [...this._notasExames, ...this._notasTrabalhos];
        let mediaExames = 0;
        for(let i = 0; i < notasTotais.length; i++){
            mediaExames += notasTotais[i];
        }
        return mediaExames / notasTotais.length;
    }  
    public somaExames = (): number => {
        let notasTotais = [...this.notasExames, ...this.notasTrabalhos];
        let somaExames = 0;
        for(let i = 0; i < notasTotais.length; i++){
            somaExames += notasTotais[i];
        }
        return somaExames;
    } 
}

const Estudante1 = new Estudantes( '123456', [10, 10, 10, 10], [10, 10],{name: 'João', birthDate: new Date(22, 22, 1990) });
console.log(Estudante1);
console.log('soma exames ', Estudante1.somaExames());
console.log('média exames ', Estudante1.mediaExames());
// console.log('teste')