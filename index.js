const express = require('express');
const app = express();
const port = 3000;

const { Client } = require('pg');
const client = new Client();
await client.connect();

//const res = await client.query('SELECT $1::text as message', ['Hello world!'])
//console.log(res.rows[0].message) // Hello world!
//await client.end()

let count = 0;

app.get('/', (req, res) => {

  res.send(`This is count number ${count}.`);

});

app.get('/increment', (req, res) => {

  count += 1;
  res.send(`Your count has been incremented and is now ${count}.`);

});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});