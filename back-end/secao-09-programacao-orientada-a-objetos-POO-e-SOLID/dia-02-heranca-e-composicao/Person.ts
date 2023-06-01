export type personParams = {
    name: string,
    birthDate: Date
}

export default class Person {
    private _name: string;
    private _birthDate: Date;

    constructor(params: personParams) {
    this._name = params.name;
    this._birthDate = params.birthDate;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        if(value.length < 3){
            throw new Error('O nome deve ter no mínimo 3 caracteres');
        }
        this._name = value;
    }

    public get birthDate(): Date {
        return this._birthDate;
    }
    public set birthDate(value: Date) {
        if(value.getTime() > Date.now()){
            throw new Error('A data de nascimento deve ser anterior à data atual');
        }
        if(value.getFullYear() - new Date().getFullYear() < -120){
            throw new Error('A pessoa não pode ter mais de 120 anos');
        }
        this._birthDate = value;
    }


}

const person = new Person({name :'João', birthDate: new Date(1990, 1, 1)});
console.log(person);
