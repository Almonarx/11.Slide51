const fs = require('fs');
const http = require('http');

http.get('http://wttr.in/~kharkov', res => {
    let result = '';

    if (res.statusCode !== 200) throw new Error(res.statusCode);

    res.setEncoding('utf-8');
    res.on('data', data => result += data);
    res.on('end', () => fs.writeFile('weather.html', result, err => {
        if (err) throw err;
        console.log('The file has been saved!');
    }));
});