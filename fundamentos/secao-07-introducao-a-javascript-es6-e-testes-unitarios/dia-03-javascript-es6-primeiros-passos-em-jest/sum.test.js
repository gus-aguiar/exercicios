const sum = require("./sum.js")

describe ("testa a funlção sum", () =>{
    it('Teste se o retorno de sum(4, 5) é 9', () =>{
        expect(sum(4,5)).toBe(9)
    })
})