const request = require('supertest');
const { expect } = require('chai')
// função sobre o login
describe('Login', () => {  
    //especificando que a função é somente sobre o post, pois dentro do login tem várias opções
    describe('POST /login', () => {
        it('Deve retornar 200 com um token em string quando usar credenciais válidas', async () => {
            //usando a biblioteca supertest (request) para fazer as requisições na api
            const resposta = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                  })  
            //usando a biblioteca chai para fazer as validações na api       
            expect(resposta.status).to.equal(200);
            expect(resposta.body.token).to.be.a('string');        
        })  
    })
})