# Guia de Explicação do Sistema Bancário

Olá! Este documento foi criado para te ajudar a entender como o código deste sistema bancário foi organizado e por que usamos cada conceito de Programação Orientada a Objetos (POO).

---

## 🏗️ As Classes (Os Moldes do Sistema)

Imagine que as **Classes** são como formas de bolo: elas definem como o bolo deve ser, mas o bolo em si (o **Objeto**) só existe quando o criamos.

### 1. `Cliente.ts`
Essa classe é a mais simples. Ela serve para guardar os dados da pessoa que é dona da conta.
- **Atributos (`_nome`, `_cpf`, etc)**: São as informações guardadas. Usamos o `_` na frente para indicar que são **privados** (ninguém de fora pode mexer neles diretamente).
- **Getters**: São métodos que permitem que outras partes do sistema leiam o nome ou o e-mail, mas sem poder alterá-los por acidente.

### 2. `Transacao.ts`
Pense nela como um "comprovante" ou um recibo. Toda vez que você mexe no dinheiro, um objeto `Transacao` é criado para registrar:
- O valor.
- O tipo (Depósito, Saque, etc).
- A data e uma breve descrição.
- **Método Estático (`criarTransferencia`)**: É um método que pertence à "forma" (classe) e não ao "bolo" (objeto). Ele ajuda a criar dois comprovantes de uma vez só quando alguém transfere dinheiro.

### 3. `Conta.ts` (A Classe Mãe)
Esta é uma classe **Abstrata**. Isso significa que você não pode criar uma "Conta" genérica (não faz sentido no banco), você sempre terá ou uma Corrente ou uma Poupança.
- **Encapsulamento**: O saldo é protegido. Você não pode simplesmente digitar `conta.saldo = 1000000`. Você precisa usar os métodos `depositar()` ou `sacar()`, que verificam se o valor é válido.
- **Composição**: A conta possui uma lista de `Transacao`. Isso é o que chamamos de composição: uma conta é composta pelo seu histórico.

### 4. `ContaCorrente.ts`
Ela "herda" tudo da `Conta`, mas ganha um superpoder: o **Limite**.
- **Herança**: Ela usa o `extends Conta` para não ter que repetir todo o código de depósito e transferência.
- **Sobrescrita (`override`)**: Ela modifica o método `sacar()` para permitir que o saldo fique negativo até o valor do limite.

### 5. `ContaPoupanca.ts`
Também herda da `Conta`, mas tem o método `renderJuros()`.
- **Lógica Específica**: Ela calcula um pequeno valor extra (0.5%) baseado no saldo atual e o adiciona à conta.

---

## 🧠 Conceitos Importantes Usados

### 🛡️ Encapsulamento
É como um controle remoto: você aperta o botão de volume, mas não precisa saber como os circuitos internos funcionam. No código, escondemos o `_saldo` para garantir que ninguém o altere sem passar pelas regras de segurança (como ver se o valor é positivo).

### 🧬 Herança
Para não escrevermos a mesma coisa várias vezes, colocamos o que é comum (número da conta, cliente, saldo) na classe `Conta` e as especialidades nas classes filhas. Isso facilita muito a manutenção!

### 🎭 Polimorfismo
A palavra parece difícil, mas a ideia é simples: "muitas formas". 
O método `exibirExtrato()` existe na classe mãe como algo que "deve ser feito". Mas a Conta Corrente mostra o extrato de um jeito (com o limite) e a Poupança de outro. O sistema chama o mesmo nome de método, mas o comportamento muda conforme o tipo da conta.

### 📜 Serialização (`toJSON`)
É como "tirar uma foto" dos dados do objeto para que eles possam ser enviados pela internet ou guardados em um arquivo. Nós escolhemos o que mostrar (nome, saldo) e o que esconder (CPF) nessa "foto".

---

## 🚀 Como tudo funciona junto (`index.ts`)

O arquivo `index.ts` é o nosso "palco". É lá que:
1. Criamos os **Clientes**.
2. Criamos as **Contas** ligadas a esses clientes.
3. Fazemos as **operações** (depósitos, saques, transferências).
4. Vemos os **resultados** no console para confirmar que as regras de negócio estão funcionando.

Esperamos que este guia tenha ajudado a clarear sua visão sobre o projeto! 🚀
