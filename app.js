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
                const http = require('http'),
                
                fs = require('fs');
                
                fs.readFile('./index.html', function (err, html) {
                    if (err) {
                        throw err; 
                    }       
                    http.createServer(function(request, response) {  
                        response.writeHeader(200, {"Content-Type": "text/html"});  
                        response.write(html);  
                        response.end(archivo2);  
                    }).listen(3000);
                    console.log('El servidor esta funcionando correctamente');
                });


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