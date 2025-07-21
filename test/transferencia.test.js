const request = require('supertest');
const { expect } = require('chai')
require('dotenv').config()
describe('Transferencias', () => {
    describe('POST /transferencias', () => {
        it('Deve retornar sucesso com 201 quando valor da transferência for igual ou acima de R$ 10,00', async () => {
            const respostaLogin = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                })  

            const token = respostaLogin.body.token    

            const resposta = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                //conta origem 1 e 2 são referentes aos IDs 1 e 2 da tabela contas do banco mysql
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 11,
                    token: ""
                   })
            
                   expect(resposta.status).to.equal(201);  
            
        })  
        it('Deve retornar falha com 422 quando valor da tranferência for abaixo de R$ 10,00', async () => {

        })
    })
})