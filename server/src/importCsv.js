const fs = require('fs')
const path = require('path')
const db = require('./db_connection')
const fastCsv = require('fast-csv')
const express = require('express');
const app = express()

const csvFiles = [
    {
        table :`${__dirname}/csv/buyers.csv`,
        fields : '`id`, `city_id`, `name`, `type`'
    },
    {
        table: `${__dirname}/csv/cities.csv`,
        fields : '`id`, `zipcode`, `city`, `lat`, `long`, `insee_code`'
    },
    {
        table : `${__dirname}/csv/farmers.csv`,
        fields : '`id`, `city_id`, `registered_at`, `first_name`, `last_name`, `farm_size`'
    },
    {
        table : `${__dirname}/csv/products.csv`,
        fields : '`id`, `name`, `category`'
    },
    {
        table : `${__dirname}/csv/transactions.csv`,
        fields : '`id`, `product_id`, `farmer_id`, `buyer_id`, `created_at`, `price`, `quantity` '
    }
]


const importCsv = () => {
    csvFiles.map(csv => {
        let file = path.basename(csv.table);
        let tableName = file.split('.').slice(0, -1).join('.');
        let stream = fs.createReadStream(csv.table);
        const csvData = [];
        let csvStream = fastCsv.parse().on("data", data => csvData.push(data))
                                    .on('end', () => {
                                        csvData.shift();
                                        db.query(`TRUNCATE ${tableName}`, (err, results) => {
                                            if (err){
                                                console.log(err);
                                            } else {
                                                db.query(`INSERT INTO ${tableName} (${csv.fields}) VALUES ?`, 
                                                [csvData], (err, results) => {
                                                if(err){
                                                    console.log(err);
                                                } else{
                                                    console.log(results);
                                                }
                                            })
                                            }
                                        })
                                        
                                    });
        stream.pipe(csvStream);
    
    })
}

module.exports = importCsv
