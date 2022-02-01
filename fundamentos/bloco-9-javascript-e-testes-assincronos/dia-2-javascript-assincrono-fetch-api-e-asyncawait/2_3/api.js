const url = 'https://api.coincap.io/v2/assets';

function listaMoedas() {
	const lista = document.getElementById('criptomoedas');
	const myObject = {
    	method: 'GET',
    	headers: { 'Accept-Encoding': 'deflate' }
  	};

	fetch(url,myObject)
	.then(response => response.json())
	.then(data => {
	console.log(data.data);
	for(let i = 0; i < data.data.length; ++i) {
		const li = document.createElement('li');
		const id = data.data[i].id;
		const symbol = data.data[i].symbol;
		const priceUsd = data.data[i].priceUsd;
		li.innerText = `${id} (${symbol}): ${priceUsd}`;
		lista.appendChild(li);
	}
	})
	.catch((error) => console.log(error));
}

listaMoedas();



/*
GABARITO:
// api.js
const fetch = require('node-fetch');

const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  console.log(coins);
}

fetchCoins();
*/
