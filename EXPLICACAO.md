# Guia de Explicação do Sistema Bancário - Versão Atualizada (Aula 07)

Este guia explica as melhorias aplicadas ao sistema utilizando os conceitos avançados de Herança, Composição e Encapsulamento da Aula 07.

---

## 🏛️ Novas Classes e Estruturas

### 1. `Endereco.ts` (Nova Classe)
Agora o sistema possui uma classe específica para gerenciar endereços. 
- **Conceito**: Usamos **Composição**. Um `Cliente` *possui* um `Endereco`. Isso evita que a classe `Cliente` fique gigante e cheia de atributos que não pertencem diretamente à pessoa (como CEP, Logradouro, etc).

### 2. `Cliente.ts` (Melhorado)
A classe Cliente foi robustecida com conceitos da Aula 07:
- **Setters com Validação**: Agora não é possível cadastrar um nome com menos de 3 caracteres ou um e-mail sem "@" ou ".". O sistema barra o erro e avisa no console.
- **Método Estático `fromJSON`**: Implementamos uma "Fábrica de Objetos". Esse método permite pegar uma string de texto (JSON) que veio de um servidor ou arquivo e transformá-la de volta em um objeto `Cliente` vivo, com todos os seus métodos funcionando.

---

## 🧬 Conceitos de OO Reforçados

### 🛡️ Encapsulamento Avançado
Ao usar `setters` para validar dados na entrada, garantimos a **Integridade dos Dados**. O objeto se recusa a entrar em um estado inválido (ex: um cliente sem e-mail).

### 🧩 Composição vs. Agregação
Ao vincular o `Endereco` ao `Cliente`, mostramos que objetos podem ser feitos de outros objetos menores. Isso é a base de sistemas complexos e organizados.

### 🏭 Padrão Factory (Métodos Estáticos)
Usar `static` permite criar funcionalidades que não dependem de uma instância específica para rodar. É ideal para utilitários e para a criação/reconstrução de objetos a partir de dados externos.

---

## 🚀 O que mudou no `index.ts`?

Agora o nosso teste demonstra:
1.  **Erros de Validação**: Tentamos criar dados errados de propósito para ver o sistema nos protegendo.
2.  **Ciclo de Vida do JSON**: Transformamos um objeto em texto (`toJSON`) e depois o texto de volta em objeto (`fromJSON`). Isso é exatamente o que acontece em aplicativos reais que se comunicam com a internet.

---
**Atualizado com os padrões de Herança e Composição da Aula 07.**
