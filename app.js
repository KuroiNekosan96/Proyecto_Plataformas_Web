const fs = require('fs');
const colors = require('colors');
const { argv } = require('./config/yargs.js')

const { leer, Datos } = require('./metodos/lecturacsv.js');

let comando = argv._[0]
console.log(comando)
switch (comando) {
    case 'publicar':
        leer(argv.file)
            .then(archivo => {
                Datos(archivo, argv.year, argv.country).then(archivo2 => {

                    console.log(archivo2.yellow)
                }).catch((err) => console.log("error: ", err.red))
            }).catch((err) => console.log("error: ", err.red))
        break;
    case 'guardar':
        leer(argv.file)
            .then(archivo => {
                Datos(archivo, argv.year, argv.country).then(archivo2 => {
                    fs.writeFile(`./archivos/${argv.country}-${argv.year}.txt`, `${archivo2}`, error => {
                        if (error)
                            console.log(error.red);
                        else
                            console.log('El archivo fue creado'.green);
                        console.log(archivo2.blue);
                    });
                }).catch((err) => console.log("error: ", err.red))
            }).catch((err) => console.log("error: ", err.red))
        break;
    default:
        console.log('Comando no valido!')
};