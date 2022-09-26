let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
//   console.log('Bem-vinda '+info.personagem)
info.recorrente = 'Sim'
// console.log(info)
// for(let key in info){
//     console.log(key)
// }
let infoDois = {
    personagem: 'Tio Patinhas’',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas’',
    recorrente: 'Sim'
}
for (let key in info,infoDois){
    if( info.recorrente && infoDois.recorrente === "Sim"){
    console.log(info[0,1,2] ,' e ', infoDois[0,1,2])}
}