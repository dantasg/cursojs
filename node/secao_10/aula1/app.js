/*
    const mod1 = require('./mod1.js');
    const falaNome = mod1.falaNome;

    falaNome();

    // import { falaNome as _falaNome } from './mod1'; // Forma mais atualizada 
    // const falaNome = _falaNome;
    // falaNome();
*/
const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1.js');

const p1 = new Pessoa ('Luiz');
console.log(p1);
