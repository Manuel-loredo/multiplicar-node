const fs = require('fs');
var colors = require('colors'); 

const { resolve } = require('path');
const { rejects } = require('assert');

let listarTabla = (base, limite = 10) =>{
    console.log('============'.green);
    console.log(`tabla de ${base}`.red); 
    console.log('============'.green);

    for (i=1; i<=limite; i++) {
      console.log(`${base} x ${i} = ${base * i}`);
    }
}

let crearArchivo =(base, limite=10) => {
    return new Promise ((resolve, reject) => {

        if(!Number(base)) {
            reject(`el valor introdicido ${base} no es un numero`);
            return;
        }

let data = '';
    for (i=1; i<=limite; i++) {
        data += `${base} x ${i} = ${base * i}\n`;
    }

fs.writeFile(`tablas/tabla-${base}-al${limite}.txt`, data, (err) => {
    if (err) reject (err)
    else
    resolve(`tabla-${base}.txt`)
 
    });
         }); 
}

module.exports = {
    crearArchivo,
    listarTabla
}