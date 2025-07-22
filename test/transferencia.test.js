const request = require('supertest');
const { expect } = require('chai')
require('dotenv').config()
const { obterToken } = require ('../helpers/autenticacao')

describe('Transferencias', () => {
    describe('POST /transferencias', () => {
        //para ser usado em todos os Its quando for chamada a função beforeEach
        let token 
        //criar função para obter token
        beforeEach(async () => {
            token = await obterToken('julio.lima', '123456')
        })

        it('Deve retornar sucesso com 201 quando valor da transferência for igual ou acima de R$ 10,00', async () => {    
            const resposta = await request(process.env.BASE_URL)
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
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                //conta origem 1 e 2 são referentes aos IDs 1 e 2 da tabela contas do banco mysql
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 7,
                    token: ""
                })
            
            expect(resposta.status).to.equal(422); 

        })
    })
})