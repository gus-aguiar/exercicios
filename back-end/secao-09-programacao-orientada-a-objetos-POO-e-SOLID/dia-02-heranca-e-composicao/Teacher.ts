import Employee from "./Employee";
import Person, { personParams } from "./Person";
import Subject from "./Subject";

class Teacher extends Person implements Employee{
    private _subject: Subject;
    private _salary: number;    
    private _admissionDate: Date;

    constructor(params: personParams, salary: number, subject: Subject, ) {
        super(params);
        this._salary = salary;
        this._subject = subject;
        this._admissionDate = new Date();
        this._registration = this.generateRegistration();
    }

    public get admissionDate(): Date {
        return this._admissionDate;
    }
    public set admissionDate(value: Date) {
        this._admissionDate = value;
    }
    private _registration: string;

    public get registration(): string {
        return this._registration;
    }
    public set registration(value: string) {
        this._registration = value;
    }
    public get salary(): number {
        return this._salary;
    }
    public set salary(value: number) {
        this._salary = value;
    }

    generateRegistration(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    
        return `PRF${randomStr}`;
};
}