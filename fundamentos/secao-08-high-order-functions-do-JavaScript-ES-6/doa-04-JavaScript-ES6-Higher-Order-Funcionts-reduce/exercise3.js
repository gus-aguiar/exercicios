const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const expectedResult = 20;
  
  function containsA() {
    return names.reduce((acc, curr) =>{
    let Tudo = `${acc}${curr}`
    let contagem = 0
        Tudo.split('').forEach((element) => {
            if (element === 'a' || element === 'A')
            return contagem += 1
        })
        return contagem
    })
  }
  console.log(containsA())