'use strict';
const
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express().use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

class MessageResponse {
  constructor() {
    console.log("in class constructor");
    this.messageResponse = undefined;
  }
}

var messageBody =  new MessageResponse();

app.post('/webhook', (req, res,err) => {  
  console.log("in post webhook");
  let body = req.body;
  console.log("MessageBOdy b4: "+messageBody.messageResponse);
  messageBody.messageResponse = req.body.Body;
  console.log("MessageBOdy: "+JSON.stringify(messageBody));
  console.log("MessageBOdy after: "+messageBody.messageResponse);
  console.log(JSON.stringify(body));
  res.status(200).send('Event received');
});

app.get('/webhook', (req, res) => {
  res.status(200).send("Get request received.");
});


app.get('/getMessageBody', (req, res) => {
  console.log("in get message response function");
  if(messageBody.messageResponse != undefined){
     console.log("in get message response function not null");
     console.log("in get message response function not null: "+JSON.stringify(messageBody));
     res.status(200).send(JSON.stringify(messageBody));
     messageBody.messageResponse = undefined;
     console.log("in get message response function not null: "+JSON.stringify(messageBody));
  }else{
     console.log("in get message response function null");
     res.status(200).send(undefined);
  }

});

app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));

