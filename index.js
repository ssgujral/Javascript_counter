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
    .then(dbResponse => res.send(`Count is ${dbResponse.rows[0].count}`))
    .catch(e => console.error(e.stack));

  //const result = client.query('SELECT count FROM count WHERE id = 1;');

  //const formatted_result = result.rows[0].count;

  
  //res.send(`This is: ${result}`);
  //res.send(`This is: ${formatted_result}`);
      

});

app.get('/increment', (req, res) => 
{

    const client = new Client
  ({
    
      connectionString,

  });



  client.connect();

  client.query('UPDATE count SET count = count + 1 WHERE id = 1; SELECT count FROM count WHERE id = 1;')
    .then(dbResponse => res.send(`Your count has been incremented by 1.`))
    .catch(e => console.error(e.stack));
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});