/*
Exercício 2

    Crie o endpoint GET /cep/:cep
        O endpoint deve receber, no parâmetro :cep, um número de CEP válido;
        O CEP precisa conter 8 dígitos numéricos e pode ou não possuir traço;
            👀 De olho na dica: utilize o regex \d{5}-?\d{3} para validar o CEP;
        Caso o CEP seja inválido, retorne o status 400 Bad Request e o seguinte JSON:

{ "error": { "code": "invalidData", "message": "CEP inválido" } }

    Caso o CEP seja válido, realize uma busca no banco de dados;
        Caso o CEP não exista no banco de dados, retorne o status 404 Not Found e o seguinte JSON:

{ "error": { "code": "notFound", "message": "CEP não encontrado" } }

- Caso o CEP exista, retorne o status `200 OK` e os dados do CEP no seguinte formato:

{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}
*/
const connection = require('./connection');

async function getCep(cep) {
	const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';
	const cepSemOTraco = cep.split('-').join('');
	let result = await connection.execute(query, [cepSemOTraco]);
	if(!result)return null;
	result = result[0];
	return result.length ? result[0] : null;
}

module.exports={
	getCep,
};
