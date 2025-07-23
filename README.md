# banco-api-tests

Automação de testes para a [API REST do projeto banco-api](https://github.com/juliodelimas/banco-api), desenvolvida para validar os principais endpoints da aplicação.

## 📌 Objetivo

Este projeto tem como objetivo testar a API de um sistema bancário, simulando operações como criação de contas, transferências e consultas de saldo. É voltado para fins educacionais e demonstração de testes automatizados com JavaScript.

## 🚀 Stack Utilizada

- **Linguagem:** JavaScript (Node.js)
- **Framework de Testes:** [Mocha](https://mochajs.org/)
- **Biblioteca de Assert:** [Chai](https://www.chaijs.com/)
- **Cliente de Requisições HTTP:** [Supertest](https://github.com/ladjs/supertest)
- **Relatórios:** [Mochawesome](https://github.com/adamgruber/mochawesome)
- **Variáveis de ambiente:** [dotenv](https://github.com/motdotla/dotenv)

## 📁 Estrutura de Diretórios

```
banco-api-tests/
├── test/
│   ├── login.test.js
│   ├── transferencias.test.js
│   └── ... outros arquivos de teste
├── mochawesome-report/
│   └── ... (gerado automaticamente)
├── .env (deve ser criado manualmente)
├── .gitignore
├── package.json
└── README.md
```

## ⚙️ Formato do arquivo `.env`

Crie um arquivo chamado `.env` na raiz do projeto com o seguinte conteúdo:

```
BASE_URL=http://localhost:3000
```

> Substitua a URL conforme o endereço da API que será testada.

## ▶️ Como Executar os Testes

Instale as dependências (caso ainda não tenha feito):

```bash
npm install
```

Execute os testes com o comando:

```bash
npm test
```

Ou execute com geração de relatório HTML:

```bash
npx mocha test --reporter mochawesome
```

O relatório será salvo no diretório `mochawesome-report/` e poderá ser aberto no navegador como um arquivo `.html`.

## 📚 Documentação das Dependências

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/ladjs/supertest)
- [Mochawesome](https://github.com/adamgruber/mochawesome)
- [dotenv](https://github.com/motdotla/dotenv)

---

Desenvolvido por [Elaine Lopes](https://github.com/elaine-lopes)
