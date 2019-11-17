const fs = require('fs');
var express = require('express')
var bodyParser = require('body-parser');
var app = express();

var urlencodeParser = bodyParser.urlencoded({ extended: false });

let leer = (url) => {
    return new Promise((resolve, reject) => {
        fs.readFile(url, 'utf8', function(err, data) {

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
        if (!Number(año)) {
            reject(`El valor ingresado: ${año} no es un numero`)
            return;
        }
        if (año < 1960) {
            reject(`El año ${año} no esta registrado, ingrese un año mayor o igual a 1960`)
            return;
        }

        var dist = datos[4].split(",")
        var pos1 = 0
        var Npa

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
                    var ta = datos2[0].length
                    Npa = datos2[0].substring(1, ta)

                    //Para darle forma al html podríamos agregar esto a los mensajes pero el problema es al momento de guardar
                    data += "<center>=============PROYECTO PLATAFORMAS WEB=============</center>\n";
                    data += "<center>      =============" + Npa + "=============</center>\n";
                    var numero = entero(datos2[pos1])
                    if (!Number(numero)) {
                        reject("No existen subscripciones en el año " + año + "\n");
                        return;

                    } else {
                        data += "<center>Valor de la subscripcion " + numero + "</center>\n";
                    }
                }
            } catch (err) {

            }
        }

        app.post(data, urlencodeParser, function(req, res) {
            console.log(req.body);
            res.render(data, { qs: req.query });
        });

        var num = 0
        var cont = 0
        var lis5num = []
        var dicnum5 = {}
        var lis5numM = []
        var dicnum5M = {}
        var listop5 = []
        var dictop5 = []
        for (var i = 5; i < datos.length; i++) {
            var datos5 = datos[i].split(",")
            try {

                if (!isNaN(entero(datos5[pos1]))) {
                    num += entero(datos5[pos1])
                    cont += 1
                    listop5.push(num)
                    dictop5[datos5[0].substring(1, datos5[0].length - 1)] = num
                    if (numero > num) {
                        lis5num.push(num)
                        dicnum5[datos5[0].substring(1, datos5[0].length - 1)] = num
                    }
                    if (numero < num) {
                        lis5numM.push(num)
                        dicnum5M[datos5[0].substring(1, datos5[0].length - 1)] = num
                    }
                }
            } catch (err) {

            }

        }
        lis5num = lis5num.sort()
        lis5num = lis5num.slice(lis5num - 5)
        lis5numM = lis5numM.sort()
        lis5numM = lis5numM.slice(lis5num - 5)
        listop5 = listop5.sort()
        listop5 = listop5.slice(listop5.length - 5)

        media = Math.round(num / cont)
        data += "Media Mundial " + media + " del año " + año + "\n"
        if (media > numero) {
            data += "La media de mundial: " + media + " es mas alta que el numero de subcripciones:" + numero + " de " + Npa + "\n"
        } else {
            data += "El numero de subscripciones de " + Npa + ": " + numero + " es mas alta que la media de mundial: " + media + "\n"
        }
        data += "\nPaises por debajo de la media de " + Npa + "\n"
        for (key in dicnum5) {
            for (var i = 0; i < 5; i++) {
                if (dicnum5[key] == lis5num[i]) {
                    data += key + " con " + lis5num[i] + " suscripciones\n"
                }

            }
        }
        data += "\nPaises por encima de la media de " + Npa + "\n"
        for (key in dicnum5M) {
            for (var i = 0; i < 5; i++) {
                if (dicnum5M[key] == lis5numM[i]) {
                    data += key + " con " + lis5numM[i] + " suscripciones\n"
                }

            }
        }

        data += "\nLos 5 paises con mas suscripciones del " + año + "\n"
        for (key in dictop5) {
            for (var i = 0; i < 5; i++) {
                if (dictop5[key] == listop5[i]) {
                    data += key + " con " + listop5[i] + " suscripciones\n"
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