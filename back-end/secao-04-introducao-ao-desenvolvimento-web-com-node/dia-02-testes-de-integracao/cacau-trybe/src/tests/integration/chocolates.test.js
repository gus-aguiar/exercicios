const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app');
chai.use(chaiHttp);

const { expect } = chai;




describe('usando o método GET em /chocolates',  function ()  {
    it('Retorna a lista completa de chocolates',  async function ()  {
        response = await minhaRequisicao()
        const response = await chai
            .request(app)
            .get('/chocolates');
    })
})
