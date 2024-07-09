const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.get('/getmethod',(req, res) => {
  
  console.log("Method:" + req.method);
  console.log("Hostname:" + req.hostname);
  console.log("Path:" + req.path);

  for (key in req.headers) {
    const topics = req.headers;
    console.log(` Headers are: ${key}: ` + topics[key]);
  }

  for (key in req.query)   {
    const topics = req.query;
    console.log(` Queryparams are: ${key}:` + topics[key]);
  }
 
  res.send("OK")
});

app.post('/postmethod', (req, res) => {
  const root = req.body;
  
  console.log(`Root name:(${typeof root.name}): ${root.name}`);
  console.log(`Root surname:(${typeof root.surname}): ${root.surname}`);
  console.log(`Root age:(${typeof root.age}) ${root.age}`);
  console.log(`Root major:(${typeof root.major}) ${root.major}`);
  console.log(`${root.ObjectValue.stringValue}`);
  
  // console.log(`Root deneme:(${typeof root.ObjectValue}) ${JSON.stringify(root.ObjectValue)}`);

   for (const key in root) {
 
     console.log(`Received root data: ${key} = ${root[key]}`);

     if (typeof root[key] === 'object') {
       const object = root[key]
       for(const objectKey in object) {

         console.log(`Received root data in ${key} : ${objectKey} = ${object[objectKey]}`);
       }
     }
  }

  res.send("OK")
  });

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});


