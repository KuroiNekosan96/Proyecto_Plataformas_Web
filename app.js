const fs = require('fs');
const chalk = require('chalk');
const { argv } = require('./config/yargs.js')

const { leer, Datos } = require('./metodos/lecturacsv.js');

let comando = argv._[0]
console.log(comando)
switch (comando) {
    case 'publicar':
        leer(argv.file)
            .then(archivo => {
                Datos(archivo, argv.year, argv.country).then(archivo2 => {

                    console.log(chalk.blue(archivo2))
                }).catch((err) => console.log("error: ", err))
            }).catch((err) => console.log("error: ", err))
        break;
    case 'guardar':
        leer(argv.file)
            .then(archivo => {
                Datos(archivo, argv.year, argv.country).then(archivo2 => {
                    fs.writeFile(`./archivos/${argv.country}-${argv.year}.txt`, `${archivo2}`, error => {
                        if (error)
                            console.log(error);
                        else
                            console.log(chalk.green('El archivo fue creado'));
                        console.log(chalk.blue(archivo2));
                    });
                }).catch((err) => console.log("error: ", err))
            }).catch((err) => console.log("error: ", err))
        break;
    default:
        console.log('Comando no valido!')
};