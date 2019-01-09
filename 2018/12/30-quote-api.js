// Write a program that gets a random quote from http://forismatic.com/en/api/ and prints it on the screen in the following format:
// <quote_author> said: <quote_text>

// http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en
// twillio api token: 2fb40f42e34de7005e9c98dddcf3fdb4
const request = require('request');

const client = require('twilio')(
    'AC5dba43546d80cc4175bdfd24f7405e19',
    '2fb40f42e34de7005e9c98dddcf3fdb4'
);

function callback(err, response, body) {
    if (err) {
        console.log('error:', err);
    } else {
        // remove non-printable and other non-valid JSON chars
        //console.log(body);
        var data = JSON.parse(body);
        var message = `${data.quoteAuthor} said: ${data.quoteText}`;
        console.log(message);
        sendSMS(message);
    }
}

function sendSMS(text) {
    client.messages.create({
        from: '+16047578770',
        to: '+16042902690',
        body: text
    }).then((message) => console.log('Message was sent, ID:' + message.sid))
        .catch((error) => {
            console.log(`Error: ${error}`);
        });
}

request('http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en', callback);

//{ "quoteText": "We make a living by what we get, but we make a life by what we give. ", "quoteAuthor": "Winston Churchill", "senderName": "", "senderLink": "", "quoteLink": "http://forismatic.com/en/bbb6ae69c8/" }