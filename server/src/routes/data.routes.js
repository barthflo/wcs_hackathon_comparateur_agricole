const { connection, query } = require('../db_connection');
const { param } = require('./farmer.routes');
const router = require('express').Router();

router.get('/', (req, res) => {
    const {size} = req.query;
    let params = "SELECT * FROM farmers JOIN transactions ON transactions.farmer_id = farmers.id JOIN cities ON farmers.city_id = cities.id JOIN products ON transactions.product_id = products.id";

    if(size !== "all"){
        if(size === "little"){
            params+=(" WHERE farm_size < 100")
        } else if(size === "medium"){
            params+=(" WHERE farm_size >= 100 AND farm_size < 200")
        } else {
            params+=(" WHERE farm_size >= 200")
        }
    }
      
      connection.query(params, (err, results) => {
          if(err) {
              return res.status(500).send(err)
          } else {
              return res.json(results)
          }
      })
}) 

module.exports = router;