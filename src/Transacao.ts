export class Transacao {
    private _data: Date;
    private _valor: number;
    private _tipo: string;
    private _descricao: string;

    constructor(valor: number, tipo: string, descricao: string) {
        this._valor = valor;
        this._tipo = tipo;
        this._descricao = descricao;
        this._data = new Date();
    }

    public get valor(): number {
        return this._valor;
    }

    public get tipo(): string {
        return this._tipo;
    }

    public get data(): Date {
        return this._data;
    }

    public get descricao(): string {
        return this._descricao;
    }

    /**
     * Método estático para criar um par de transações de transferência
     */
    public static criarTransferencia(valor: number): [Transacao, Transacao] {
        const debito = new Transacao(valor, "TRANSFERENCIA_ENVIADA", "Transferência enviada");
        const credito = new Transacao(valor, "TRANSFERENCIA_RECEBIDA", "Transferência recebida");
        return [debito, credito];
    }

    public toJSON() {
        return {
            data: this._data.toISOString(),
            valor: this._valor,
            tipo: this._tipo,
            descricao: this._descricao
        };
    }
}
