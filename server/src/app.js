const express = require('express');
var cors = require('cors')
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const router = require('./routes/index.routes');
const importCsv = require('./importCsv');

importCsv();

app.use(cors());
app.use('/api', router);

module.exports = app;