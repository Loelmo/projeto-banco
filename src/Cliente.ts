import { Endereco } from "./Endereco.js";

export class Cliente {
    private _nome: string;
    private _cpf: string;
    private _email: string;
    private _endereco?: Endereco;

    constructor(nome: string, cpf: string, email: string, endereco?: Endereco) {
        this._nome = ""; 
        this._email = "";
        this._cpf = cpf;
        
        // Usamos os setters para validar na criação
        this.nome = nome;
        this.email = email;
        this._endereco = endereco;
        
        console.log(`Cliente ${this.nome} cadastrado com sucesso!`);
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(novoNome: string) {
        if (novoNome.length >= 3) {
            this._nome = novoNome;
        } else {
            console.error("Erro: O nome deve ter pelo menos 3 caracteres.");
        }
    }

    public get cpf(): string {
        return this._cpf;
    }

    public get email(): string {
        return this._email;
    }

    public set email(novoEmail: string) {
        if (novoEmail.includes("@") && novoEmail.includes(".")) {
            this._email = novoEmail;
        } else {
            console.error("Erro: E-mail inválido.");
        }
    }

    public get endereco(): Endereco | undefined {
        return this._endereco;
    }

    public set endereco(novoEndereco: Endereco | undefined) {
        this._endereco = novoEndereco;
    }

    public toJSON() {
        return {
            nome: this._nome,
            email: this._email,
            endereco: this._endereco ? this._endereco.toJSON() : undefined
            // CPF omitido por segurança
        };
    }

    /**
     * Método estático para recriar um cliente a partir de um JSON (Aula 07)
     */
    public static fromJSON(json: string): Cliente {
        const dados = JSON.parse(json);
        let endereco;
        if (dados.endereco) {
            endereco = new Endereco(
                dados.endereco.logradouro,
                dados.endereco.numero,
                dados.endereco.bairro,
                dados.endereco.cidade,
                dados.endereco.cep,
                dados.endereco.complemento
            );
        }
        return new Cliente(dados.nome, "000.000.000-00", dados.email, endereco);
    }
}
