const button = document.querySelector('#button')
const img = document.querySelector('#img')
const name = document.querySelector('#nomeHeroi')
button.addEventListener('click', (event) =>{
    event.preventDefault();
    let ID = Math.floor(Math.random() * 1000);
return fetch(`https://superheroapi.com/api.php/5626782000730787/${ID}`)
.then(response => response.json())
.then(data => {
    img.src = data.image.url;
    name.innerHTML = data.name;
}).catch((error) => window.alert('erro'))
})
