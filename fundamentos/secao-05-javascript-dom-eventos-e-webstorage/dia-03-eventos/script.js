function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  function Criacalendrio (){
  let ulPai = document.getElementById('days')
  for (let index in decemberDaysList){
    let criaLi = document.createElement('li')
    criaLi.innerHTML = decemberDaysList[index]
    criaLi.className = 'day'
    ulPai.appendChild(criaLi)
  }
  document.getElementsByClassName('day')[25].className ='day holiday'
  document.getElementsByClassName('day')[26].className ='day holiday'
  document.getElementsByClassName('day')[32].className ='day holiday'
  document.getElementsByClassName('day')[5].className ='day friday'
  document.getElementsByClassName('day')[12].className ='day friday'
  document.getElementsByClassName('day')[19].className ='day friday'
  document.getElementsByClassName('day')[26].className ='day friday'
  }
  Criacalendrio ()

  function createButton (param){
    let divPai = document.getElementsByClassName('buttons-container')[0]
    let button = document.createElement('button')
    button.innerText = param
    button.id = 'btn-holiday'
    divPai.appendChild(button)
    
  }

  createButton ('feriado')
  
  let botao = document.getElementById('btn-holiday')
  botao.addEventListener('click',coloreHoliday) 
  

  function coloreHoliday(){
  // let backgroundColor = rgb(238,238,238)
  let holidayzera = document.getElementsByClassName('holiday')
  for (let index = 0; index < holidayzera.length; index +=1){
    if (holidayzera[index].style.backgroundColor === "red") {
      holidayzera[index].style.backgroundColor = "rgb(238,238,238)"
    }else {holidayzera[index].style.backgroundColor = "red"}
  }
}

function botaoSexta (param){
  let pai = document.getElementsByClassName('buttons-container')[0]
  let botaoSexta = document.createElement('button')
  botaoSexta.innerText = param
  botaoSexta.id = "btn-friday"
  pai.appendChild(botaoSexta)
}
botaoSexta('Sexta-feira')


let botaoDois = document.getElementById('btn-friday')

botaoDois.addEventListener('click', function (){
  let listapai = document.querySelectorAll('.friday')
  const numerosSexta = document.querySelectorAll('.friday').innerText
  for(let key = 0; key < listapai.length; key += 1){
    if(listapai[key].innerHTML !== 'sextou!'){
    listapai[key].innerHTML = 'sextou!'}
    else if(listapai[key].innerHTML === param){
      listapai[key] = numerosSexta
    } 
  }

})
//=======================================aqui não consegui fazer o valor de volta do sextou ===================================//
