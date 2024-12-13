# Projeto de Automação de Testes com Cypress e Node.js

Bem-vindo ao repositório do projeto de automação de testes utilizando [Cypress](https://www.cypress.io/) e [Node.js](https://nodejs.org/).

## Descrição do Projeto
Este projeto foi desenvolvido para automatizar cenários de teste para o QA Store Desafio.

## Funcionalidades
- Validação de formulários e interações de usuário;
- Testes de fluxos de compra (e-commerce);
- Verificação de mensagens e comportamentos esperados;

## Requisitos
Certifique-se de que você tem as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 14 ou superior);
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/);

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/maiaramuller/QA-STORE.git
   cd QA-STORE
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## Como Executar os Testes

1. Executar no modo interativo (Cypress GUI):
```bash
npx cypress open
```

2. Selecione um navegador de sua preferência (como o Google Chrome)

3. No menu lateral esquerdo clique em "Specs" e selecione um dos testes para visualização.

## Estrutura do Projeto

```
├── cypress/
│   ├── e2e/                                # Cenários de teste
|       ├── Cupons/                         # Testes dos cupons "FRETEGRATIS" e "20LIMITADO"
|       ├── Extra - Campo inválido/         # Teste extra com validação de um CPF inválido
│   ├── fixtures/                           # Dados de teste
│   ├── support/                            # Suporte e comandos personalizados
│   
├── node_modules/                           # Dependências do Node.js
├── package.json                            # Configurações e dependências do projeto
├── cypress.config.js                       # Configuração do Cypress
└── README.md                               # Documentação do projeto
```

