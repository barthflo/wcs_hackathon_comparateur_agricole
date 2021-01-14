require('dotenv').config();
const PORT = process.env.PORT;
const app = require('./app');
const importCsv = require('./importCsv');

importCsv();

app.listen(PORT, (err) => {
  if (err) {
    console.error(`Error: ${err.message}`);
  } else {
    console.log(`Server is running on port: ${PORT}`);
  }
});

