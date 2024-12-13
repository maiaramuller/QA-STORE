# Projeto de Automação de Testes com Cypress e Node.js

Bem-vindo ao repositório do projeto de automação de testes utilizando [Cypress](https://www.cypress.io/) e [Node.js](https://nodejs.org/).

## Descrição do Projeto
Este projeto foi desenvolvido para automatizar cenários de teste para o QA Store Desafio.

## Funcionalidades
- Validação de formulários e interações de usuário;
- Testes de fluxos de compra (e-commerce);
- Verificação de mensagens e comportamentos esperados;

## Ferramenta Escolhida
- **Ferramenta:** Cypress
- **Motivo da Escolha:** Cypress é moderno, fácil de configurar, rápido e ideal para testar interfaces de aplicações web. Ele oferece uma integração nativa com navegadores e possui excelente suporte para testes de interface e comportamento.

## Cenários Selecionados para Automação
1. **CT01:** Aplicar o cupom FRETEGRATIS com produtos no carrinho e validar remoção do frete.
2. **CT04:** Aplicar o cupom 20LIMITADO com produtos no carrinho e validar se o sistema exibiu a mensagem: “Cupom não encontrado”.
3. **Cenário extra:** Validar se é possível finalizar uma compra no carrinho inserindo um CPF inválido.

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

2. Selecione um navegador de sua preferência (como o Google Chrome).

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
├── .gitignore                              # Arquivos a serem ignorados no git
├── package.json                            # Configurações e dependências do projeto
├── cypress.config.js                       # Configuração do Cypress
└── README.md                               # Documentação do projeto
```

## Organização
- Cada teste começa com a adição de produtos ao carrinho.
- Os cenários testam cupons diferentes e validam os cálculos esperados.
- O código é modular e utiliza seletores de elementos diretamente da página.

## Considerações
- Atualize os seletores (#id, .class ou title) caso sejam alterados no site.
- Ajuste mensagens de erro ou logs conforme necessários.

