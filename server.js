'use strict';
const
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express().use(bodyParser.json());

const messageBody = undefined;
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/webhook', (req, res,err) => {  
  console.log("in post webhook");
  let body = req.body;
  messageBody = new MessageResponse(req.body.Body);
  console.log("MessageBOdy: "+JSON.stringify(messageBody));
  console.log("MessageBOdy: "+messageBody.messageResponse);
  console.log(JSON.stringify(body));
  res.status(200).send('Event received');
});

app.get('/webhook', (req, res) => {
  res.status(200).send("Get request received.");
});


app.get('/getMessageBody', (req, res) => {
  console.log("in get message response function");
  if(messageBody != undefined){
     console.log("in get message response function not null");
     res.status(200).send(JSON.stringify(messageBody);
     messageBody = undefined;
  }else{
     console.log("in get message response function null");
     res.status(200).send(undefined);
  }

});

app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));
class MessageResponse {
  constructor(message) {
    console.log("in class constructor");
    this.messageResponse = message;
  }
}
