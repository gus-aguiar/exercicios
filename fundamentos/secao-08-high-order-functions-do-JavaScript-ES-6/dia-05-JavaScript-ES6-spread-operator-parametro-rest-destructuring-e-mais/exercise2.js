// escreva sum abaixo
const sum = (...param) => {
    return param.reduce((acc, curr) => {
        return acc + curr
    })
}
console.log(sum(4,5,6))