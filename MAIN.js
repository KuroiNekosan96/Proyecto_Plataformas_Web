//Wendy's Team
'use strict'

const fs = require('fs');

fs.readFile('DATASET.csv', 'utf8', function(err, data) {
    var dataArray = data.split(/\r?\n/);
    console.log(dataArray);
});