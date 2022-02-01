const url = 'https://api.coincap.io/v2/assets';

const links = [
"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json",
"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json"
];

const fetchWithFallback = async (links,obj) => {
  let response;
  for(let link of links)
  {  try{
      response = await fetch(link,obj)
      if(response.ok)
          return response
        }catch(e){}
  }
   return response
}


async function cotacaoDolarMoeda(moeda) {
	const cotacao = await fetchWithFallback(links)
	.then(response => response.json())
	.then(data => data.usd[moeda]);
	return cotacao;
}




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
			li.innerText = `${moeda.id} (${moeda.symbol}): ${moeda.priceUsd*await cotacaoDolarMoeda('brl')}`;
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
};

const fetchUsdCurrencies = async () => {
  const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
  const usdEndpoint = '/currencies/usd.min.json'
  const url = baseUrl.concat(usdEndpoint);

  const usdCurrencies = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.usd)
    .catch((error) => error.toString());

  return usdCurrencies;
};

const setCoins = async () => {
  const coins = await fetchCoins();
  const usdCurrencies = await fetchUsdCurrencies();

  const coinsList = document.getElementById('coins-list');

  coins
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');
      const usdPrice = Number(coin.priceUsd);
      const brlPrice = usdPrice * usdCurrencies.brl;

      newLi.innerText = `${coin.name} (${coin.symbol}): ${brlPrice.toFixed(2)}`;

      coinsList.appendChild(newLi);
    });
};

window.onload = () => setCoins();
*/
