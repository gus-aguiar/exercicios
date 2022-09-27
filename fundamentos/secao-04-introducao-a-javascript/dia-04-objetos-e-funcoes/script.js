// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
// //   console.log('Bem-vinda '+info.personagem)
// info.recorrente = 'Sim'
// // console.log(info)
// // for(let key in info){
// //     console.log(key)
// // }
// let infoDois = {
//     personagem: 'Tio Patinhas’',
//     origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//     nota: 'O último MacPatinhas’',
//     recorrente: 'Sim'
// }
// for (let key in info,infoDois){
//     if( key === "recorrente" &&
//     info[key] ==="Sim" &&
//     infoDois[key] ==="Sim"){
//         return('Ambos recorrentes')
    
// }
// }
// console.log(info +" e "+ infoDois)
//
//==============================dúvida aqui em cima======================================//

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },

//     ],
    
//   };

//   leitor.livrosFavoritos.push(
//     {
//         titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//         autor: 'JK Rowling',
//         editora: 'Rocco',
//       }
//   )
// //  console.log('o livro favorito de ' + leitor.nome +' '+ leitor.sobrenome +' se chama '+ leitor.livrosFavoritos[1].titulo + '.')
// console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos")

//============================================começando exercícios de funções=================//
// let palavra = 'arara'
// function verificaPalindrome(word){
//     for (index in word){
//         if(word[index] != word[(word.length -1) - index]){
//         return false;}
//     }
// }
// return true; 
// console.log(palavra.split(''))
// console.log(palavra.reverse)
// console.log(palavra.reverse())
//======dúvida aqui, ver como funciona split e reverse e como o código se comportou no gabarito=============//


// function valorMaior(numeros){
//     let indexMaior = 0;
//     for(let index in numeros){
//         if(numeros[indexMaior] < numeros[index]){
//             indexMaior = index;
//         }
//     }
//     return indexMaior;
// }
// console.log(valorMaior([3, 15 , 777]))


//========================copiei do gabarito===========================//
// function indiceDoMaior(numeros) {
//     let indiceMaior = 0;
//     for (let indice in numeros) {
//       if (numeros[indiceMaior] < numeros[indice]) {
//         indiceMaior = indice;
//       }
//     }
  
//     return indiceMaior;
//   }
  
//   console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));

//=====================fazendo exercício 3 =========================//

// function menorValor(numero){
//   let indiceMenor = 0;
//   for (let index in numero){
//     if (numero[indiceMenor] > numero[index] ){
//       indiceMenor = index;
//     }
//   }
//   return indiceMenor;
// }
// console.log(menorValor([2, 4, 6, 7, 10, 0, -3]))

//=====================exercício 04===========================//