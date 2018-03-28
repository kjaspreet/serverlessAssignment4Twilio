'use strict';

const client = require('twilio')(
  '<YOUR TWILIO ACCOUNT SID>',
  '<YOUR TWILIO AUTH TOKEN>'
  );

module.exports.sendMessage = (event, context, callback) => {
  client.messages.create({
  from: '<YOUR TWILIO NUMBER>',
  to: '<YOUR OWN CELL NUMBER>',
  body: "New file is added to your S3 bucket"
}).then((messsage) => console.log(message.sid));
};
