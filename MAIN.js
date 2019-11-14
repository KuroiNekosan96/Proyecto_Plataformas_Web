//Wendy's Team
'use strict'

// const fs = require('fs');
// fs.readFile('DATASET.csv', 'utf8', function(err, data) {
//     var dataArray = data.split(/\r?\n/);
//     console.log(dataArray);
// });
const csv = require('csv-parser');
const fs = require('fs');

const filepath = "DATASET.csv"

fs.createReadStream(filepath)
    .on('error', () => {
        // handle error
    })

.pipe(csv())
    .on('data', (row) => {
        console.log(row);
    })

.on('end', () => {
    // handle end of CSV
})