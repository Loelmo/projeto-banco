# Sistema Bancário Simplificado - Projeto Final

Este projeto implementa a lógica de negócios de um sistema bancário utilizando TypeScript e os pilares da Programação Orientada a Objetos (POO).

## 🚀 Como executar o projeto

1. Certifique-se de ter o Node.js instalado.
2. Navegue até a pasta do projeto:
   ```bash
   cd projeto-final-banco
   ```
3. Instale as dependências (necessário apenas uma vez):
   ```bash
   npm install
   ```
4. Execute o projeto usando o script configurado:
   ```bash
   npm start
   ```

---

## 🛠 Decisões de Design

### 1. Encapsulamento Rigoroso

Seguindo os requisitos, o atributo `_saldo` na classe `Conta` é privado (ou protegido nas subclasses) e não possui um setter público. Todas as modificações de saldo ocorrem através dos métodos controlados `depositar`, `sacar` e `transferir`, garantindo validações de valores negativos e saldo insuficiente.

### 2. Abstração e Herança

Utilizei uma classe abstrata `Conta` para definir o comportamento comum a todos os tipos de conta bancária. As classes `ContaCorrente` e `ContaPoupanca` estendem essa base, implementando comportamentos específicos:

- **ContaCorrente**: Adiciona o conceito de "limite de cheque especial", permitindo saques além do saldo disponível.
- **ContaPoupanca**: Implementa um método `renderJuros` para simular o rendimento mensal.

### 3. Composição

A classe `Conta` possui uma composição com a classe `Transacao`. Cada conta mantém seu próprio histórico de objetos `Transacao`, que representam as operações realizadas. Isso permite rastreabilidade total sem expor a lógica interna de como o saldo é calculado.

### 4. Métodos Estáticos e Polimorfismo

- Implementei o método estático `Transacao.criarTransferencia()` que orquestra a criação de duas transações vinculadas (débito e crédito), garantindo que a transferência seja tratada como uma unidade lógica.
- O método `toJSON()` foi implementado em todas as classes para facilitar a serialização, ocultando dados sensíveis como o CPF do cliente.

---

## 🏗 Estrutura do Projeto

- `src/Cliente.ts`: Gerencia dados do correntista.
- `src/Transacao.ts`: Representa operações financeiras.
- `src/Conta.ts`: Classe base abstrata para o sistema bancário.
- `src/ContaCorrente.ts`: Especialização de conta com limite extra.
- `src/ContaPoupanca.ts`: Especialização de conta com rendimento.
- `src/index.ts`: Arquivo de demonstração das funcionalidades.
- `EXPLICACAO.md`: Guia didático explicando os conceitos de POO usados no projeto.

---

## 📊 Diagramas

- `diagramas/sistema-bancario.uml`: Diagrama de classes oficial seguindo o padrão PlantUML.

---

**Desenvolvido como projeto final para a Turma 1680.**
