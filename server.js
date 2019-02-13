'use strict';
const
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express().use(bodyParser.json());

app.post('/webhook', (req, res,err) => {  
  
  console.log("in post webhook");
  console.log(req);
  let body = req.body;
   console.log(JSON.stringify(body));
    res.status(200).send('Event received');
});

app.get('/webhook', (req, res) => {
    res.status(200).send("Get request received.");
  });

app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));
