const fs = require('fs');

const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', function HTTPGetRootHandler(req, res) {
  res.send("Hello world");
});

// Di endpoint ini kita akan menggunakan req.query
app.get('/users', function HTTPGetUsersHandler(req, res) {
  
});


// Di endpoint ini kita akan menggunakan req.params
app.get('/users/:id', function HTTPGetUsersInputHandler(req, res) {
  // res.send(req.params.id);

});

// Di endpoint ini kita akan mengkombinasikan req.params dan req.query
app.get('/users/:id/companies', function HTTPGetUserCompaniesHandler(req, res) {
  
});

app.listen(3000, () => {
  console.log(`Welcome to express at port ${PORT}`);
});