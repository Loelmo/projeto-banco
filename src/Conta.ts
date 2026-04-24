import { Cliente } from "./Cliente.js";
import { Transacao } from "./Transacao.js";

export abstract class Conta {
    private _numero: string;
    private _cliente: Cliente;
    protected _saldo: number = 0;
    private _historico: Transacao[] = [];

    constructor(numero: string, cliente: Cliente) {
        this._numero = numero;
        this._cliente = cliente;
    }

    public get numero(): string {
        return this._numero;
    }

    public get cliente(): Cliente {
        return this._cliente;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public get historico(): Transacao[] {
        return [...this._historico];
    }

    public depositar(valor: number): void {
        if (valor <= 0) {
            console.error("Erro: O valor do depósito deve ser positivo.");
            return;
        }
        this._saldo += valor;
        this._historico.push(new Transacao(valor, "DEPOSITO", "Depósito em conta"));
        console.log(`Sucesso: Depósito de R$ ${valor.toFixed(2)} realizado na conta ${this._numero}.`);
    }

    public sacar(valor: number): boolean {
        if (valor <= 0) {
            console.error("Erro: O valor do saque deve ser positivo.");
            return false;
        }
        if (this._saldo < valor) {
            console.error("Erro: Saldo insuficiente.");
            return false;
        }
        this._saldo -= valor;
        this._historico.push(new Transacao(valor, "SAQUE", "Saque em conta"));
        console.log(`Sucesso: Saque de R$ ${valor.toFixed(2)} realizado na conta ${this._numero}.`);
        return true;
    }

    public transferir(valor: number, contaDestino: Conta): void {
        if (valor <= 0) {
            console.error("Erro: O valor da transferência deve ser positivo.");
            return;
        }

        // Criamos as transações usando o método estático conforme solicitado
        const [transacaoDebito, transacaoCredito] = Transacao.criarTransferencia(valor);

        // Verificamos se há saldo (lógica do sacar)
        if (this._saldo >= valor) {
            this._saldo -= valor;
            this._historico.push(transacaoDebito);
            
            contaDestino.receberTransferencia(transacaoCredito);
            
            console.log(`Sucesso: Transferência de R$ ${valor.toFixed(2)} da conta ${this._numero} para ${contaDestino.numero}.`);
        } else {
            console.error("Erro: Saldo insuficiente para transferência.");
        }
    }

    /**
     * Método auxiliar para receber o crédito de uma transferência
     * mantendo o encapsulamento do saldo.
     */
    protected receberTransferencia(transacao: Transacao): void {
        this._saldo += transacao.valor;
        this._historico.push(transacao);
    }

    public toJSON() {
        return {
            numero: this._numero,
            cliente: this._cliente.toJSON(),
            saldo: this._saldo,
            historico: this._historico.map(t => t.toJSON())
        };
    }

    public abstract exibirExtrato(): void;
}
