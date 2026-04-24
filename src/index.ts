import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

console.log("=== INICIANDO SIMULAÇÃO BANCÁRIA ===\n");

// 1. Criar Clientes
const cliente1 = new Cliente("João Silva", "123.456.789-00", "joao@email.com");
const cliente2 = new Cliente("Maria Oliveira", "987.654.321-11", "maria@email.com");

console.log(`Clientes criados: ${cliente1.nome} e ${cliente2.nome}\n`);

// 2. Criar Contas
const contaJoao = new ContaCorrente("1010-1", cliente1, 1000);
const contaMaria = new ContaPoupanca("2020-2", cliente2);

// 3. Operações na conta do João
console.log("--- Operações João ---");
contaJoao.depositar(500);
contaJoao.sacar(200);
contaJoao.sacar(1500); // Testando limite de cheque especial
contaJoao.sacar(5000); // Testando erro de saldo/limite insuficiente

// 4. Operações na conta da Maria
console.log("\n--- Operações Maria ---");
contaMaria.depositar(1000);
contaMaria.renderJuros();

// 5. Transferência
console.log("\n--- Transferência ---");
contaMaria.transferir(300, contaJoao);

// 6. Exibir Extratos
contaJoao.exibirExtrato();
contaMaria.exibirExtrato();

// 7. Demonstração de Serialização (toJSON)
console.log("--- Demonstração JSON (Serialização) ---");
console.log(JSON.stringify(contaJoao.toJSON(), null, 2));

console.log("\n=== FIM DA SIMULAÇÃO ===");
