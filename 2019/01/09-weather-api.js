const request = require('request');

let apiKey = process.env.OPENWEATHERMAP_API_KEY; // get it from openweathermap.org and set to an environment variable
let city = 'vancouver';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;


request(url, function (err, response, body) {
    if (err) {
        console.log('error:', err);
    } else {
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);
    }
});