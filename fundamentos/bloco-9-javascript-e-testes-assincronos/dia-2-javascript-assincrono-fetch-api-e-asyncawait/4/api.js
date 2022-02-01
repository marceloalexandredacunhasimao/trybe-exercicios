const url = 'https://api.coincap.io/v2/assets';

const listaDeMoedas = async (numero = -1 ) => {
	const myObject = {
    	method: 'GET',
    	headers: { 'Accept-Encoding': 'deflate' }
  	};

	const listaTotal = await fetch(url, myObject)
	.then(response => response.json())
	.then(data => data.data)
	.catch((error) => error.toString());
	
	if(typeof listaTotal === 'string')return listaTotal;
	
	if(numero === -1) {
		return listaTotal;
	}
	//
	return listaTotal.filter((_,index) => index < numero);
}

async function mostraMoedas() {
	const lista = document.getElementById('criptomoedas');
	const moedas = await listaDeMoedas(10);
	if(typeof moedas !== 'string') {
		for(moeda of moedas) {
			const li = document.createElement('li');
			li.innerText = `${moeda.id} (${moeda.symbol}): ${moeda.priceUsd}`;
			lista.appendChild(li);
		}
	} else {
		const li = document.createElement('li');
		li.innerText = moedas;
		lista.appendChild(li);
	}
}

window.onload = mostraMoedas;













/*
//GABARITO:
// api.js
const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
}

const setCoins = async () => {
  const coins = await fetchCoins();

  const coinsList = document.getElementById('coins-list');

  coins
    .filter((_, index) => index < 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');

      newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;

      coinsList.appendChild(newLi);
    });
}

window.onload = () => setCoins();
*/
