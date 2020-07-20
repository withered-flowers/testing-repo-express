const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', function HTTPGetRootHandler(req, res) {
  res.send("Hello world");
});

// Selain define endpoint users,
// Kita juga bisa mengkombinasikan untuk membaca file json di sini
// dan menampilkannya ke dalam browser kita, yay !


// Disini ceritanya kita menginginkan inputan id dari browser untuk kita
// proses / tampilkan kembali


app.listen(3000, () => {
  console.log(`Welcome to express at port ${PORT}`);
});