const express = require('express');
const app = express();
const port = 3000;

const { Pool, Client } = require('pg');

const connectionString = 'postgresql://worldwide@localhost:5432/web_counter'

app.get('/', (req, res) => 
{
  
  const client = new Client({
  
      connectionString,
  
  });
  
  client.connect();
  
  
  client.query('SELECT count FROM count WHERE id = 1;')
  .then(res => console.log(res.rows[0]))
  .catch(e => console.error(e.stack));

      

});

app.get('/increment', (req, res) => {

  const client = new Client({
  
    connectionString,

});

client.connect();

client.query('UPDATE count SET count = count + 1 WHERE id = 1;')
  .then(res => console.log(res.rows[0]))
  .catch(e => console.error(e.stack));





  //count += 1;
  //res.send(`Your count has been incremented and is now ${count}.`);

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});