'use strict';

const client = require('twilio')(
  'AC86cbf57ff93572e3f1fe468f5b6235f3',
  '6871ddfc7c5e3aeb727fc09c4eb950c5'
  );

module.exports.sendMessage = (event, context, callback) => {
  client.messages.create({
  from: '+16042452855',
  to: '+16045124582',
  body: "New file is added to your S3 bucket"
}).then((messsage) => console.log(message.sid));
};
