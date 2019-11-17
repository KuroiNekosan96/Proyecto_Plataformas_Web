mensaje1 = `Permite establecer el path del archivo CSV que
contiene los datos a analizar`

mensaje2 = 'Permite determinar el país a analizar a través de su código'

mensaje3 = 'Permite especificar el año para el cual se requiere las estadísticas.'

let opt = {
    file: {
        demand: true,
        alias: `f`,
        description: mensaje1
    },
    country: {
        alias: `c`,
        description: mensaje2
    },
    year: {
        alias: `y`,
        default: 2018,
        description: mensaje3
    }
}

let optg = {
    file: {
        demand: true,
        alias: `f`,
        description: mensaje1
    },
    country: {
        alias: `c`,
        description: mensaje2
    },
    year: {
        alias: `y`,
        default: 2018,
        description: mensaje3
    },
    out: {
        demand: true,
        alias: `o`,
        description: 'Establece el nombre del archivo donde se almacenará los resultados.'
    }
}

const argv = require('yargs')
    .command(`publicar`, `Publicará las estadísticas`, opt)
    .command(`guardar`, `Guarda los datos del pais en txt`, optg)
    .help()
    .argv;

module.exports = {
    argv
};