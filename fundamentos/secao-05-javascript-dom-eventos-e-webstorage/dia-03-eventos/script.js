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
    criaLi.id = 'dia' + index
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
const numerosSexta = document.querySelectorAll('.friday')
let newFriday = 'sextou!'
botaoDois.addEventListener('click', function (){
  for(let key = 0; key < numerosSexta.length; key += 1){
    const sextas = [4, 11, 18, 25]
    if(numerosSexta[key].innerHTML !== newFriday){
    numerosSexta[key].innerHTML = newFriday}
    else if(numerosSexta[key].innerHTML === newFriday){
      numerosSexta[key].innerHTML = sextas[key]
    } 
  }
}
  )

  function criaTarefa(param){
    let pegaDiv = document.getElementsByClassName('my-tasks')[0]
    let criaSpan = document.createElement('span')
    criaSpan.innerText = param
  pegaDiv.appendChild(criaSpan)
  }
  
  criaTarefa('cozinhar')

  function legenda (param){
    let pegaDiv = document.getElementsByClassName('my-tasks')[0]
    let criaDiv = document.createElement('div')
    criaDiv.className = 'task'
    criaDiv.style.backgroundColor = param
    pegaDiv.appendChild(criaDiv)
  
  }
  legenda('red')


document.getElementsByClassName('task')[0]

function checkTask(){
  let tasks = document.getElementsByClassName('task')[0]
  tasks.addEventListener('click', function (event){
  if(event.target.className === 'task'){
    tasks.className = 'task selected'
  } else if(event.target.className === 'task selected'){
    tasks.className = 'task'
  }
  }
  )
  }

checkTask()





function aumentaDiminui(){
let calendarioTodo = document.getElementsByClassName('day')
for (index in calendarioTodo){
  let calendario =  calendarioTodo[index]
  calendario.addEventListener('mouseover', aumenta)
  function aumenta (event){
    event.target.style.fontSize = '30px'
    event.target.style.weight = '200'
    
  }
  calendario.addEventListener('mouseout', diminui)

  function diminui (event){
    event.target.style.fontSize = '20px'
    event.target.style.weight = '600'
  }
 
}
}

aumentaDiminui()






