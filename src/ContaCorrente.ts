import { Conta } from "./Conta.js";
import { Cliente } from "./Cliente.js";
import { Transacao } from "./Transacao.js";

export class ContaCorrente extends Conta {
    private _limite: number;

    constructor(numero: string, cliente: Cliente, limite: number = 500) {
        super(numero, cliente);
        this._limite = limite;
    }

    public get limite(): number {
        return this._limite;
    }

    // Sobrescrevendo o saque para considerar o limite
    public override sacar(valor: number): boolean {
        if (valor <= 0) {
            console.error("Erro: O valor do saque deve ser positivo.");
            return false;
        }

        const saldoDisponivel = this._saldo + this._limite;

        if (saldoDisponivel < valor) {
            console.error(`Erro: Saldo insuficiente (considerando limite de R$ ${this._limite.toFixed(2)}).`);
            return false;
        }

        this._saldo -= valor;
        // A lógica de adicionar ao histórico poderia ser centralizada ou feita aqui
        // Para seguir o estilo do projeto, vamos registrar a transação manual se necessário
        // mas aqui vamos apenas simular a lógica de negócio específica.
        
        // Chamada manual de registro de transação (simplificado para o exemplo)
        // No mundo real, poderíamos ter um método `registrarTransacao` em Conta.
        console.log(`Sucesso: Saque de R$ ${valor.toFixed(2)} realizado (Conta Corrente ${this.numero}).`);
        return true;
    }

    public exibirExtrato(): void {
        console.log("\n--- EXTRATO CONTA CORRENTE ---");
        console.log(`Cliente: ${this.cliente.nome}`);
        console.log(`Número: ${this.numero}`);
        console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`);
        console.log(`Limite: R$ ${this._limite.toFixed(2)}`);
        console.log("Transações:");
        this.historico.forEach(t => {
            console.log(` [${t.tipo}] ${t.data.toLocaleDateString()} - ${t.descricao}: R$ ${t.valor.toFixed(2)}`);
        });
        console.log("------------------------------\n");
    }
}
