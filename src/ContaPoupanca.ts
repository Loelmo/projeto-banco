import { Conta } from "./Conta.js";
import { Cliente } from "./Cliente.js";
import { Transacao } from "./Transacao.js";

export class ContaPoupanca extends Conta {
    private _taxaRendimento: number = 0.005; // 0.5% ao mês

    constructor(numero: string, cliente: Cliente) {
        super(numero, cliente);
    }

    public renderJuros(): void {
        const juros = this._saldo * this._taxaRendimento;
        if (juros > 0) {
            this._saldo += juros;
            // Registrar como um depósito ou transação especial
            console.log(`Rendimento: A conta poupança ${this.numero} rendeu R$ ${juros.toFixed(2)}.`);
        }
    }

    public exibirExtrato(): void {
        console.log("\n--- EXTRATO CONTA POUPANÇA ---");
        console.log(`Cliente: ${this.cliente.nome}`);
        console.log(`Número: ${this.numero}`);
        console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`);
        console.log("Transações:");
        this.historico.forEach(t => {
            console.log(` [${t.tipo}] ${t.data.toLocaleDateString()} - ${t.descricao}: R$ ${t.valor.toFixed(2)}`);
        });
        console.log("------------------------------\n");
    }
}
