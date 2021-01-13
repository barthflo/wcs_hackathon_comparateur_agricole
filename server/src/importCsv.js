const fs = require('fs')
const path = require('path')
const db = require('./db_connection')
const fastCsv = require('fast-csv')

const csvFiles = [
    {
        table :`${__dirname}/csv/buyers.csv`,
        fields : 'id, city_id, name, type'
    },
    {
        table: `${__dirname}/csv/cities.csv`,
        fields : 'id, zipcode, city, lat, long, insee_code'
    }
]


const importCsv = () => {
    csvFiles.map(csv => {
        let file = path.basename(csv.table);
        console.log(file);
        let tableName = file.split('.').slice(0, -1).join('.');
        let stream = fs.createReadStream(csv.table);
        const csvData = [];
        let csvStream = fastCsv.parse().on("data", data => csvData.push(data))
                                    .on('end', () => {
                                        csvData.shift();
                                        db.query(`INSERT INTO ${tableName} (${csv.fields}) VALUES ?`, 
                                            [ csvData], (err, results) => {
                                                if(err){
                                                    console.log(err)
                                                } else{
                                                    console.log(results);
                                                }
                                            })
                                    });
        stream.pipe(csvStream);
    
    })
}

module.exports = importCsv ;