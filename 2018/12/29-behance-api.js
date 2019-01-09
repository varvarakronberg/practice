const request = require('request');

function callback(err, response, body) {
    if (err) {
        console.log('error:', err);
    } else {
        //console.log('body:', body);
        var data = JSON.parse(body);
        console.log(data.projects[0].name);
    }
}

request('https://api.behance.net/v2/projects?sort=published_date&client_id=5MgtQl6wdi0DpT0pUxVy93eaWfiLtX43', callback);

