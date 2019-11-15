const fs = require('fs');
//cre una variable que se llame data
let guardar = (file, country, year, name) => {
    return new Promise((resolve, reject) => {
        if (!Number(year)) {
            reject(`Valor ${year} no es numero`)
            return;
        }
        if (year < 1960) {
            reject("Año no valio ")
            return;
        }
        let data = 'algo';
        fs.writeFile(`archivostxt/archivo-${name}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`archivo-${name}.txt`);
        });
    })
}
let publicar = (file, country, year) => {
    return new Promise((resolve, reject) => {
        if (!Number(year)) {
            reject(`Valor ${year} no es numero`)
            return;
        }
        let data = country;
        fs.readFile(`${file}`, 'utf8', (error, datos) => {
            if (error) throw error;
            resolve(`El contenido es:`, datos)
        });
    })
}

module.exports = {
    guardar,
    publicar
};