const express = require('express');
const app = express();

const PORT = 3000;

// Di sini kita mendefinisikan penggunaan endpoint '/'
// yang akan meng-handle HTTP GET method


app.listen(3000, () => {
  console.log(`Welcome to express at port ${PORT}`);
});