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

//=========================================================

let array = ['java', 'javascript', 'python', 'html', 'css'];

for(let palavra = 0; palavra <= array.length -1 ; palavra+=1){
    for (let letras = 0; letras <= palavra[letras] -1; letras+=1 ){
        if(palavra[letras]> palavra[letras -1 ]){
            console.log(palavra[letras])
        }
    }
}