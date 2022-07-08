#!/bin/bash
set -e
HELP="Usage: $0 PROJECT_DIRECTORY DB_NAME
"

[ $# -ne 2 ] && printf "$HELP">&2 && exit 1

PROJECT_DIRECTORY="$1"
DB_NAME="$2"

mkdir -p "$PROJECT_DIRECTORY"
cd "$PROJECT_DIRECTORY"


npm install express
touch index.js
npm install sequelize mysql2
npm install --save-dev sequelize-cli
npm install dotenv

mkdir src

echo "const path = require('path');

module.exports = {
'config': path.resolve('src', 'config', 'config.js'),
'models-path': path.resolve('src', 'models'),
'seeders-path': path.resolve('src', 'seeders'),
'migrations-path': path.resolve('src', 'migrations'),
};" >> .sequelizerc

npx sequelize-cli init

echo "require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};" >> src/config/config.js

echo "MYSQL_USER=root
MYSQL_PASSWORD=root
MYSQL_DATABASE=\"${DB_NAME}\"
HOSTNAME=localhost
" >> .env





#Configuração do express:
echo "const express = require('express');
const router = express.Router();
router.use(express.json());

module.exports = router;
" >> "src/${DB_NAME}Router.js"



echo "const express = require('express');
const ${DB_NAME}Router = require('./src/${DB_NAME}Router.js');

const app = express();
app.use(${DB_NAME}Router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(\`Ouvindo na porta ${PORT}!\`));" >> index.js


echo "Todas as operações foram concluídas com exito"
