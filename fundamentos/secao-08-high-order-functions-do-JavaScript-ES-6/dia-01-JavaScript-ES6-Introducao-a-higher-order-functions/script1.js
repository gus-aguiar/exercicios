const nomeMail = (nome) =>{
    const nomeSplitado = nome.toLowerCase().split(' ')
    nomeCompleto = nome
    eMail = `${nomeSplitado[0]}_${nomeSplitado[1]}@trybe.com`
    return {
        nomeCompleto,
        eMail
    }
}

// console.log(nomeMail('Pedro Guerra'))

const newEmployees = () => {
    const employees = {
      id1: nomeMail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: nomeMail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: nomeMail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  console.log(newEmployees())