const express = require('express');
const app = express();
const router = require('./routes/index.routes');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/api', router);



module.exports = app;