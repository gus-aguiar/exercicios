// const a = 5;
// const b = 6;
// const c = 7;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log (a / b);
// console.log(a % b);

// if (a > b){
//     console.log("a é maior");
// } else if (a < b) { 
//     console.log("b é maior");
// } else if (a = b){
//     console.log();
// }

// if(a > b && a > c){
// console.log('a é maior do que b e c');
// }
// else if(b > a && b > c){
//     console.log('b é maior do que a e c');
//     }
// else if(c > a && c > b){
//     console.log('c é maior do que a e b');
// } 
// if (a > 0){
//     console.log('a é positivo');
// }
// else if (a < 0){
//     console.log('a é negativo');
// }   
// else if (a = 0){
//     console.log('a é igual a zero');
// }

// let angulo1 = 30;
// let angulo2 = 50;
// let angulo3 = 100;
// if(angulo1 + angulo2 + angulo3 === 180){
// console.log(true);
// } 
// else { 
// console.log(false); 
// }

// let xadrez = 'bisPo';
// switch (xadrez.toLowerCase () ){
// case 'dama':
//     console.log('em linha e diagonais');
//     break;
// case 'bispo': 
//     console.log('diagonais')
//     break;
// case 'torre': 
//     console.log('em linha')
//     break;
// case 'cavalo': 
//     console.log('em L')
//     break;
// case 'peão': 
//     console.log('uma casa reto')
//     break;
// case 'rei': 
//     console.log('uma casa para todos os lados')
//     break
//     default:
//         console.log('valor inválido')
// }

//let const1 = 7
//let const2 = 3
//let const3 = 9 

// if(const1 % 2 === 0 ||const2 % 2 === 0 ||const3 % 2 === 0 ){
//     console.log(true)
// } else{console.log(false)}

// let const1 = 2
// let const2 = 4
// let const3 = 6 

// if(const1 % 2 === 1 ||const2 % 2 === 1 ||const3 % 2 === 1 ){
//     console.log(true)
// } else{console.log(false)}

let salarioBruto = 17000
let aliquotaINSS = 0 // não tinha declarado essa variável
let salarioLiquido = 0 // não tinha declarado essa variável
let IRSS = 0 // não tinha declarado essa variável

if (salarioBruto <= 1556.94){
     aliquotaINSS = (salarioBruto * 8) / 100 // aqui tinha um let antes de aliquota
} 
else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92){ // aqui tinha um let antes de aliquota
    aliquotaINSS = (salarioBruto * 9) / 100
} 
else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82){ // aqui tinha um let antes de aliquota
    aliquotaINSS = (salarioBruto * 11) / 100
} 
else if (salarioBruto > 5198.82){
    aliquotaINSS = 570.88 // aqui tinha um let antes de aliquota
}
salarioDescontado1 = salarioBruto - aliquotaINSS
if ( salarioDescontado1 < 1903.98){
    salarioLiquido = salarioDescontado1 // aqui tinha um let antes de salarioLiquido
}
else if (salarioDescontado1 >= 1903.99 && salarioDescontado1 <= 2826.65){
    IRSS = (7.5 * salarioDescontado1/100) - 142.80 // aqui tinha um let antes de IRSS
    salarioLiquido = salarioDescontado1 - IRSS  // aqui tinha um let antes de salarioLiquido
}
else if (salarioDescontado1 >= 2826.66 && salarioDescontado1 <= 3751.05){
    IRSS = (15 * salarioDescontado1/100) - 354.80 // aqui tinha um let antes de IRSS
    salarioLiquido = salarioDescontado1 - IRSS // aqui tinha um let antes de salarioLiquido
}
else if (salarioDescontado1 >= 3751.06 && salarioDescontado1 <= 4664.68){
    IRSS = (15 * salarioDescontado1/100) - 636.13 // aqui tinha um let antes de IRSS
    salarioLiquido = salarioDescontado1 - IRSS // aqui tinha um let antes de salarioLiquido
}
else if (salarioDescontado1 > 4664.68){
    IRSS = (27 * salarioDescontado1/100) - 869.36 // aqui tinha um let antes de IRSS
    salarioLiquido = salarioDescontado1 - IRSS // aqui tinha um let antes de salarioLiquido
}
console.log (salarioLiquido)

//Tirei os let de dentro dos IFs, perguntar por que não deu pra deixar com let dentro !!!!!
