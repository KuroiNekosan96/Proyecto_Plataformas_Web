const fs = require('fs');
const http = require('http');

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

                    data += "</br></br><center> <h2 class=" + '"' + "page-section-heading text-center text-uppercase text-secondary mb-0" + '"' + "> PROYECTO PLATAFORMAS WEB </h2></center > </br> ";

                    data += "</br><center><h3>" + Npa + "</h3></center></br></br>";
                    var numero = entero(datos2[pos1])
                    if (!Number(numero)) {
                        reject("No existen suscripciones en el año " + año + "\n");
                        return;

                    } else {
                        data += "<center><h5>Valor de la suscripcion: " + numero + "</h5></center>\n";
                    }
                }
            } catch (err) {

            }
        }

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
        data += "</br><center><h6>La Media Mundial es: " + media + " del año " + año + "</h6></center>\n"
        if (media > numero) {
            data += "</br><h6><center>La media mundial: " + media + " es mas alta que el numero de suscripciones:" + numero + " de " + Npa + "</center></p>\n"
        } else {
            data += "</br><center><h6>" + Npa + " tiene: " + numero + " mas suscripciones que la media mundial: " + media + "</h6></center></br></br>"
        }
        data += "<table align=" + '"' + "center" + '"' + " width=" + '"' + "400" + '"' + " border=" + '"' + "2" + '"' +
            "><tr><td><center><h6>Pais</h6></center></td><td><center><h6>Suscripcion</h6></center></td></tr>";

        data += "<center><h5>\nPaises por debajo de la media de " + Npa + "</h5></center></br>"
        for (key in dicnum5) {
            for (var i = 0; i < 5; i++) {
                if (dicnum5[key] == lis5num[i]) {
                    data += "<tr> <td ><center>" + key + "</center></td> <td><center>" + listop5[i] + " </center></td></tr>\n"
                }

            }
        }
        data += "</table></br>";
        data += "<table align=" + '"' + "center" + '"' + " width=" + '"' + "400" + '"' + " border=" + '"' + "2" + '"' +
            "><tr><td><center><h6>Pais</h6></center></td><td><center><h6>Suscripcion</h6></center></td></tr>";

        data += "<center><h5>\nPaises por encima de la media de " + Npa + "</h5></center></br>"
        for (key in dicnum5M) {
            for (var i = 0; i < 5; i++) {
                if (dicnum5M[key] == lis5numM[i]) {
                    data += "<tr> <td ><center>" + key + "</center></td> <td><center>" + listop5[i] + " </center></td></tr>\n"
                }

            }
        }
        data += "</table></br>";
        data += "<table align=" + '"' + "center" + '"' + " width=" + '"' + "400" + '"' + " border=" + '"' + "2" + '"' +
            "><tr><td><center><h6>Pais</h6></center></td><td><center><h6>Suscripcion</h6></center></td></tr>";

        data += "\n<center><h5>Los 5 paises con mas suscripciones del " + año + "</h5></center></br>\n"
        for (key in dictop5) {
            for (var i = 0; i < 5; i++) {
                if (dictop5[key] == listop5[i]) {
                    data += "<tr> <td ><center>" + key + "</center></td> <td><center>" + listop5[i] + " </center></td></tr>\n"
                }

            }

        }
        data += "</table></br>";

        resolve(data)


    });
};



module.exports = {
    leer,
    Datos
};