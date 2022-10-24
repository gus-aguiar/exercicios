const resultado = (numeroEscolhido) => {
    let numeroGerado = Math.ceil(Math.random() * 5)
    if(numeroGerado === numeroEscolhido){
        return 'Parabéns você ganhou'
    }
    if(numeroGerado !== numeroEscolhido){
        return `Tente novamente seu numero foi ${numeroEscolhido}, o sorteado foi ${numeroGerado}`  
    }
};
console.log (resultado(1))