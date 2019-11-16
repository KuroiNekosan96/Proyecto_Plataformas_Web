const fs = require('fs');

let leer = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', function(err, data) {

            if (err) {
                reject(err);
            } else {
                dataArray2 = data.split(/\r?\n/)
                resolve(dataArray2);
            }
        });
    });
};
let Datos = (datos, año, pais) => {
    return new Promise((resolve, reject) => {

        var dist = datos[4].split(",")
        var pos1 = 0

        let entero = (cadena) => parseInt(cadena.substring(1, cadena.length - 1))

        for (var i = 0; i < dist.length; i++) {

            if (entero(dist[i]) == año) {

                var pos1 = i
            }
        }

        let data = '';
        for (var i = 5; i < datos.length; i++) {
            try {
                var datos2 = datos[i].split(",")
                var datos3 = datos2[1].substring(1, 4)
                if (datos3 == pais) {
                    var numero = entero(datos2[pos1])
                    data += "Nombre pais:\t" + datos2[0].substring(1, 10) + "\n";
                    data += "Numero de subscripciones:\t" + numero + "\n";

                }
            } catch (err) {

            }
        }
        var num = 0
        var cont = 0
        var lis5num = []
        var dicnum5 = {}
        var listop5 = []
        var dictop5 = []
        for (var i = 5; i < datos.length; i++) {
            var datos5 = datos[i].split(",")
            try {

                if ((!isNaN(entero(datos5[pos1]))) && (entero(datos5[pos1]) != 0)) {
                    num += entero(datos5[pos1])
                    cont += 1
                    listop5.push(num)
                    dictop5[datos5[0].substring(1, datos5[0].length - 1)] = num
                    if (numero > num) {
                        lis5num.push(num)
                        dicnum5[datos5[0].substring(1, datos5[0].length - 1)] = num
                    }
                }
            } catch (err) {

            }

        }
        lis5num = lis5num.sort()
        lis5num = lis5num.slice(lis5num - 5)
        listop5 = listop5.sort()
        listop5 = listop5.slice(listop5.length - 5)
        media = Math.round(num / cont)
        data += "Media de subcripciones:\t" + media + "\n"
        if (media > numero) {
            data += "La media de subscripciones:\t" + media + " es mas alta que el numero de subcripciones: \t" + numero + "\n"
        } else {
            data += "El numero de subscripciones \t" + numero + " es mas alta que la media de subscripciones: \t" + media + "\n"
        }
        data += "\nTOP 5 PAISES POR DEBAJO DE:" + numero + "\n"
        for (key in dicnum5) {
            for (var i = 0; i < lis5num.length; i++) {
                if (dicnum5[key] == lis5num[i]) {
                    data += key + " : " + lis5num[i] + "\n"
                }

            }
        }
        data += "\nTOP 5 PAISES EN EL AÑO:" + año + "\n"
        for (key in dictop5) {
            for (var i = 0; i < listop5.length; i++) {
                if (dictop5[key] == listop5[i]) {
                    data += key + " : " + listop5[i] + "\n"
                }

            }
        }
        resolve(data)
    });
};

module.exports = {
    leer,
    Datos
}
