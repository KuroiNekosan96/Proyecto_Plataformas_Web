let opt = {
    file: {
        demand: true,
        alias: `f`,
        description: `La ruta del archivo csv`
    },
    country: {
        alias: `c`,
        description: 'Pais al que se le va analizar'
    },
    year: {
        alias: `y`,
        default: 2018,
        description: 'Permite especificar el año para el cual se requiere las estadísticas.'
    }
}

let optg = {
    file: {
        demand: true,
        alias: `f`,
        description: `La ruta del archivo csv`
    },
    country: {
        alias: `c`,
        description: 'Pais al que se le va analizar'
    },
    year: {
        alias: `y`,
        default: 2018,
        description: 'Permite especificar el año para el cual se requiere las estadísticas.'
    },
    out: {
        alias: `o`,
        description: `Establece el nombre del archivo donde se almacenrá los resultados.`
    }
}

const argv = require('yargs')
    .command('publicar', 'Crea un archivo co la tabla de multiplicar', opt)
    .command('guardar', 'Guarda los datos de los paises', optg)
    .help()
    .argv;


module.exports = {
    argv
};