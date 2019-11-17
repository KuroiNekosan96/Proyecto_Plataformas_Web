const fs = require('fs');
const colors = require('colors');
const { argv } = require('./config/yargs.js')
const { leer, Datos } = require('./metodos/lecturacsv.js');

let comando = argv._[0]
console.log(comando)
switch (comando) {
    case 'publicar':
        leer(argv.file).then(archivo => {
            Datos(archivo, argv.year, argv.country).then(archivo2 => {
                const http = require('http');

                const hostname = '127.0.0.2';
                const port = 3000;

                const server = http.createServer((req, res) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end(archivo2.yellow);
                });

                server.listen(port, hostname, () => {
                    console.log(`Server running at http://${hostname}:${port}/`);
                });

                console.log(archivo2.yellow)
            }).catch((err) => console.log("error: ", err.red))
        }).catch((err) => console.log("error: ", err.red))
        break;
    case 'guardar':
        leer(argv.file).then(archivo => {
            Datos(archivo, argv.year, argv.country).then(archivo2 => {
                fs.writeFile(`./archivos/${argv.out}-${argv.country}-${argv.year}.txt`, `${archivo2}`, error => {
                    if (error)
                        console.log(error.red);
                    else
                        console.log('Archivo Creado'.green);

                });
            }).catch((err) => console.log("error: ", err.red))
        }).catch((err) => console.log("error: ", err.red))
        break;
    default:
        console.log('Comando no valido!')
};