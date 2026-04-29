import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Endereco } from "./Endereco.js";

console.log("=== INICIANDO SIMULAÇÃO BANCÁRIA ATUALIZADA (AULA 07) ===\n");

// 1. Criar Endereços
const end1 = new Endereco("Av. Paulista", "1000", "Bela Vista", "São Paulo", "01310-100");
const end2 = new Endereco("Rua das Flores", "123", "Centro", "Curitiba", "80000-000", "Apto 42");

// 2. Criar Clientes com Endereço e Validação
console.log("--- Cadastro de Clientes ---");
const cliente1 = new Cliente("João Silva", "123.456.789-00", "joao@email.com", end1);
const cliente2 = new Cliente("Maria Oliveira", "987.654.321-11", "maria@email.com", end2);

console.log("\n--- Testando Validação de Nome Curto ---");
const clienteInvalido = new Cliente("Jo", "000.000.000-00", "erro@email.com"); 
// Deve mostrar erro de nome curto

console.log("\n--- Testando Validação de Email Inválido ---");
cliente1.email = "email_sem_arroba"; 
// Deve mostrar erro de email

// 3. Criar Contas
const contaJoao = new ContaCorrente("1010-1", cliente1, 1000);
const contaMaria = new ContaPoupanca("2020-2", cliente2);

// 4. Operações
console.log("\n--- Operações ---");
contaJoao.depositar(500);
contaMaria.depositar(1000);
contaMaria.transferir(300, contaJoao);

// 5. Exibir Extratos (Polimorfismo em ação)
contaJoao.exibirExtrato();
contaMaria.exibirExtrato();

// 6. Testando Serialização e Desserialização (Novo da Aula 07)
console.log("\n--- Testando Serialização (Objeto -> JSON) ---");
const clienteJSON = JSON.stringify(cliente1.toJSON(), null, 2);
console.log(clienteJSON);

console.log("\n--- Testando Desserialização (JSON -> Novo Objeto) ---");
const clienteRecriado = Cliente.fromJSON(clienteJSON);
console.log(`Nome do cliente recriado: ${clienteRecriado.nome}`);
console.log(`Cidade do endereço recriado: ${clienteRecriado.endereco?.cidade}`);

console.log("\n=== FIM DA SIMULAÇÃO ===");
