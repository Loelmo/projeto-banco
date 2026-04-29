export class Endereco {
    constructor(
        public logradouro: string,
        public numero: string,
        public bairro: string,
        public cidade: string,
        public cep: string,
        public complemento?: string
    ) {}

    public toJSON() {
        return {
            logradouro: this.logradouro,
            numero: this.numero,
            bairro: this.bairro,
            cidade: this.cidade,
            cep: this.cep,
            complemento: this.complemento
        };
    }
}
