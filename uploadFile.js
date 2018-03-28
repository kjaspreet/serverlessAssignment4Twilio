'use strict';
const AWS = require('aws-sdk'); 
const uuid = require('uuid');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();
const accountSid = '<Your TWILIO ACCOUNT SID>';
const authToken = '<YOUR TWILIO AUTH TOKEN>';
const client = require('twilio')(accountSid, authToken);

module.exports.uploadFile = (event, context, callback) => {
  event.Records.forEach((record) => {
    const filename = record.s3.object.key;
    const eventType = record.eventName
    const eventTime = record.eventTime

    const params = {
      TableName: 'ass4-table-try',
      Item: {
        id: uuid.v1(),
        fileName: filename,
        eventType: eventType,
        eventTime: eventTime
      }
    }

    dynamoDb.put(params, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
    });

    client.messages.create({
     from: '+16042452855',
     to: '<YOUR CELL NUMBER>',
     body: `${filename} was added to your S3 bucket`
   }).then((messsage) => console.log(message.sid));

  });
};
