// let fatorial = 1;
// let vamo = 5;
// for(let index = 1;index <= vamo; index += 1){
//     fatorial = index * fatorial;
// }
// console.log(fatorial)

//=========================================================

// let word = 'tryber';
// let reverso = [];

// for (index = word.length - 1; index >=0 ;index-=1){
//     reverso.push(word[index]);
// }

// console.log(reverso)
// for(let palavra = 0; palavra <= array.length -1 ; palavra+=1){
//     for (let letras = 0; letras <= palavra[letras] -1; letras+=1 ){
//         if(palavra[letras]> palavra[letras -1 ]){
//             console.log(palavra[letras])
//         }
//     }
// }


//=========================================================

//============comecei a refazer os exercícios do dia 03 =================


//===========Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

// let fatorial = 1
// let numerito = 10
// for(let index = numerito; index > 0; index -= 1){
//     fatorial = fatorial * index 
// }
// console.log(fatorial)

//==Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.===//

// let word = 'psuruco';
// let reverse = []
// for (let index = word.length - 1; index >= 0; index -= 1 ){
//     reverse.push(word[index])
// }
// console.log(reverse)

//==Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.==//

let array = ['java', 'javascript', 'python', 'html', 'css','psurucobiruleibe'];
let maiorPalavra =[]
let menorPalavra = array[0]

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index];
    }
    
}
// console.log ('a menor palavra é ' + menorPalavra)
console.log (menorPalavra)

// ============ dúvida na menor palavra ==================

// =====Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50. ===//

//descobrir se um número é primo
// let numero = 10 // trocar para checar se o número é primo
// let intervalo = 50
// let resultado = []
//     for(index = 2; index <= intervalo; index +=1)
//         for(let index = 2; index < numero ; index +=1 ){
//             if(numero % index != 0){
//                 resultado.push(numero)
//             }
//         }
//         console.log(intervalo)
