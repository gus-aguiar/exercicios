let numbers = [2,4,6];
// for (let index = 0; index < numbers.length; index += 1){
//     console.log(numbers[index]);
// }
// let soma = 0;
// for (let index = 0 ; index < numbers.length; index += 1){
//     soma += numbers[index];
    
// }
// let media = soma/numbers.length
// console.log(media)
// if (media > 20){
//     console.log('valor maior que 20')
// } else if (media <= 20){
//     console.log('valor menor do que 20')
// }
// maiorn = 0
// for (let index = 0;index < numbers.length; index += 1){
//     if(numbers[index] > maiorn){
//         maiorn = numbers[index]
//     }
// }
// console.log(maiorn)
let contadorImpar = 0 
for(let index = 0 ; index < numbers.length; index += 1){
    if(numbers[index] % 2 === 1){
        contadorImpar += 1
    }
}
if (contadorImpar === 0){
    console.log('nenhum valor ímpar encontrado')
}
console.log(contadorImpar)
