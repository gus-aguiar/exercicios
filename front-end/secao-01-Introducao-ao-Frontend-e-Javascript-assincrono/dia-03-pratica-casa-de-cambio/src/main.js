import './style.css';

const requestURL = 'https://api.exchangerate.host/latest';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
  const { response } = request;
  console.log(response);
};

// ================================================== //
// variavel coin
const button = document.getElementById('button');
const search = document.getElementById('search');
const coin = document.getElementById('coin');
button.addEventListener('click', () => {
  fetch(`https://api.exchangerate.host/latest?base=${search.value}`)
    .then(((value) => value.json()))
    .then(((moeda) => {
      Object.entries(moeda.rates).forEach((index) => {
        const miniCoin = document.createElement('div');
        miniCoin.className = 'miniCoin';
        const microCoinUm = document.createElement('div');
        microCoinUm.className = 'microCoinUm';
        const microCoinDois = document.createElement('div');
        microCoinDois.className = 'microCoinDois';
        const indexZero = index[0];
        const indexUm = index[1];
        microCoinUm.innerHTML = indexZero;
        microCoinDois.innerHTML = indexUm;
        miniCoin.appendChild(microCoinUm);
        miniCoin.appendChild(microCoinDois);
        coin.appendChild(miniCoin);
      });
    }));
});
