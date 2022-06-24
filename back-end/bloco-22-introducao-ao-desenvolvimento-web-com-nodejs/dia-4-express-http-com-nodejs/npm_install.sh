#!/bin/sh
set -e
cd "$(dirname "$(readlink -f "$0")")"

ftrap() {
	[ $? -eq 0 ] || echo "Falha ao instalar um ou mais pacotes">&2
}

trap ftrap EXIT

npm i express
npm i nodemon
npm i body-parser

echo "Todos os pacotes foram instalados com exito"
