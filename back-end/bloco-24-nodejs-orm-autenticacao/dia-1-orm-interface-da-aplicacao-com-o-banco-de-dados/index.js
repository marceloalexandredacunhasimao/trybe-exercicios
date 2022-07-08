const express = require('express');
const exercicio20220707Router = require('./src/exercicio20220707Router.js');

const app = express();
app.use(exercicio20220707Router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta !`));
