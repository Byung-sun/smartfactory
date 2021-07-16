const xlsxFile = require('read-excel-file/node');
 
xlsxFile('./test.xlsx').then(function(rows){
    console.log(rows);
});

