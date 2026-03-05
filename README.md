Projeto de automação de testes utilizando Cypress para validar funcionalidades de Frontend e API.  
Inclui cenários de login, fluxo de carrinho e validações de endpoints utilizando requisições HTTP.

QA Automation - Cypress

Projeto de automação de testes utilizando Cypress, contendo testes End-to-End (Frontend) e Testes de API.
O objetivo deste projeto é demonstrar práticas de automação de testes para validação de funcionalidades de interface e serviços de API.

Tecnologias utilizadas
Cypress
JavaScript

Node.js
Estrutura do projeto
QA-AUTOMATION-CYPRESS
│
├── cypress
│   ├── e2e
│   │   ├── api.cy.js
│   │   ├── cart.cy.js
│   │   └── login.cy.js
│   │
│   ├── fixtures
│   │   └── users.json
│   │
│   ├── pages
│   │
│   └── support
│       ├── commands.js
│       └── e2e.js
│
├── cypress.config.js
├── package.json
└── package-lock.json
Testes implementados
Testes de Frontend

Arquivos:

login.cy.js
cart.cy.js
Cenários testados:
Login de usuário
Fluxo de carrinho de compras
Validação de elementos na interface

Testes de API
Arquivo:
api.cy.js
Validações realizadas:
Requisições GET
Requisições POST
Validação de status code
Validação de resposta da API

Instalação
Clone o repositório:
git clone https://github.com/luantiw/QA-AUTOMATION-CYPRESS.git

Entre na pasta do projeto:
cd QA-AUTOMATION-CYPRESS

Instale as dependências:
npm install
Executando os testes

Abrir o Cypress:
npx cypress open

Executar no terminal:
npx cypress run

Autor :Luan Bezerra de Oliveira

GitHub
https://github.com/luantiw

LinkedIn
https://www.linkedin.com/in/luantiw
