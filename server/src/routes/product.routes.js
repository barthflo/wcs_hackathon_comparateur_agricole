const {connection} = require('../db_connection');
const router = require('express').Router();

router.get('/', (req, res) => {
  const sql = "SELECT * FROM products";
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).send({errorMessage: err.message});
    } else {
      res.status(200).json(results);
    }
  });
});

router.get('/:id', (req, res) => {
  const sql = "SELECT DISTINCT name, category, transactions.price AS price FROM products JOIN transactions ON transactions.product_id = products.id JOIN farmers ON transactions.farmer_id = ?";
  connection.query(sql, [req.params.id], (err, results) => {
    if (err) {
      res.status(500).send({errorMessage: err.message});
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;