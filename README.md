# Aplicación en Node.Js
# Descripción
Crear una aplicación en NodeJS que permita leer los datos de las
Suscripciones a telefonía celular móvil, publicadas por el Banco
Mundial y publicar las estadísiticas de un determinado país en un
año específico.

## Pasos para ejecutar el proyecto 🚀
Para ejecutar este proyecto manejamos dos comandos:
publicar y guardar:
publicar: Este comando publicará las
estadísticas en una página web básica. Se requieren de tres
parámetros:
• --file -f: Permite establecer el path del archivo CSV que
contiene los datos a analizar
• --country -c: Permite determinar el país a analizar a través
de su código ISO 3166 ALPHA-3.
• --year -y: Permite especificar el año para el cual se
requiere las estadísticas. Por defecto, 2018.
guardar: Este comando almacenará los
resultados de las estadísticas en un archivo de texto. Recibe los
mismos parámetros que el comando anterior, y se adiciona la
siguiente opción:
• --out -o: Establece el nombre del archivo donde se almacenrá
los resultados.
### Pre-requisitos 📋

### Instalación 🔧
Ejecutar el comando siguientes:
-npm install yargs (instalacion yargs)
-npm install colors(instalacion de los colores)
-npm install file-system --save(instalacion Fs)
## Ejecutando las pruebas ⚙️

_guardar_
Para ver los comandos de guardar ejecutar:
```
node app.js guardar -h
```
Nos indicara los siguientes comandos
```
Guarda los datos del pais en txt

Opciones:
  --version      Muestra número de versión                            [booleano]
  --help         Muestra ayuda                                        [booleano]
  --file, -f     La ruta del archivo csv                             [requerido]
  --country, -c  Pais al que se le va analizar
  --year, -y     Permite especificar el año para el cual se requiere las
                 estadísticas. Por defecto, 2018.                [defecto: 2018]
  --out, -o      Establece el nombre del archivo donde se almacenrá los
                 resultados.

Falta argumento requerido: file
```
para crear un archivo digitamos
```
node app.js guardar -f DATASET.csv -c ARB -y 2016 -o eje
```
Se creara un archivo txt en la carpeta archivos
### Analice las pruebas end-to-end 🔩

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

### Y las pruebas de estilo de codificación ⌨️

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

## Integrantes✒️

* **Misael Cabascango** 
* **Wendy German** 
* **Diego Osorio** 
* **Dorival Pichamba** 
* **Jefferson Yanqui** 
## Expresiones de Gratitud 🎁








