const fetch = require('node-fetch');

const links = [
//"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json",
//"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
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

fetchWithFallback(links).then(response => response.json())
.then(data => {
	console.log(data);
	console.log('');
	console.log(`Um dolar equivale a ${data.usd.brl} reais.`);
});
