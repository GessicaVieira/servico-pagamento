# Serviço de Pagamento — Integração Contínua

[![Integração Contínua](https://github.com/GessicaVieira/servico-pagamento/actions/workflows/ci.yml/badge.svg)](https://github.com/GessicaVieira/servico-pagamento/actions/workflows/ci.yml)

Projeto acadêmico desenvolvido para demonstrar a implementação de uma pipeline de integração contínua utilizando GitHub Actions.

A aplicação consiste em um serviço simples de pagamentos desenvolvido em JavaScript. O serviço permite registrar pagamentos e consultar o último pagamento realizado.

## Objetivo

Desenvolver uma pipeline de integração contínua contemplando:

- execução automática por push;
- execução manual;
- execução agendada;
- execução de testes automatizados;
- geração de relatório de testes;
- armazenamento do relatório na pipeline;
- documentação da solução.

## Tecnologias utilizadas

- JavaScript;
- Node.js;
- Mocha;
- Mochawesome;
- GitHub Actions;
- npm.

## Estrutura do projeto

```text
.
├── .github
│   └── workflows
│       └── ci.yml
├── src
│   └── pagamento.js
├── test
│   └── pagamento.test.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md