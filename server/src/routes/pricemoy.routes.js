const {connection} = require('../db_connection');
const router = require('express').Router();

router.get('/', (req, res) => {
  const sql = "SELECT products.name, AVG(price) AS AveragePrice ,category FROM transactions AS t JOIN products ON t.product_id = products.id GROUP BY products.name"
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).send({errorMessage: err.message});
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;