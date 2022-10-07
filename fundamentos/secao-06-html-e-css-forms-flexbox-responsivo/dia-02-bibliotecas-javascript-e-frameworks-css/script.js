let button = document.getElementById('submit')
button.addEventListener('click', function(event){
    event.preventDefault()
})

let section = document.getElementById('section')
let clear = document.createElement('button')
clear.id = "clear"
clear.innerHTML = 'limpar'
clear.type = "reset"
section.appendChild(clear)
