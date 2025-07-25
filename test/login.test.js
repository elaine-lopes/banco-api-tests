const request = require('supertest');
const { expect } = require('chai')
require('dotenv').config()
const postLogin = require('../fixtures/postLogin.json')

// função sobre o login
describe('Login', () => {  
    //especificando que a função é somente sobre o post, pois dentro do login tem várias opções
    describe('POST /login', () => {
        it('Deve retornar 200 com um token em string quando usar credenciais válidas', async () => {
            const bodyLogin = { ...postLogin }
            
            //usando a biblioteca supertest (request) para fazer as requisições na api
            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)  
            //usando a biblioteca chai para fazer as validações na api       
            expect(resposta.status).to.equal(200);
            expect(resposta.body.token).to.be.a('string');        
        })  
    })
})