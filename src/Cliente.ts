export class Cliente {
    private _nome: string;
    private _cpf: string;
    private _email: string;

    constructor(nome: string, cpf: string, email: string) {
        this._nome = nome;
        this._cpf = cpf;
        this._email = email;
    }

    public get nome(): string {
        return this._nome;
    }

    public get cpf(): string {
        return this._cpf;
    }

    public get email(): string {
        return this._email;
    }

    public toJSON() {
        return {
            nome: this._nome,
            email: this._email
            // CPF omitido por segurança, conforme requisito
        };
    }
}
