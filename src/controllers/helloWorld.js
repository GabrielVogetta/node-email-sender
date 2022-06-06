import fs from 'fs';
import methodNotAllowed from './methodNotAllowed.js';

const helloWorld = (req, res) => {
    
    if(req.method !== 'GET'){
        return methodNotAllowed(res);
    }

    fs.readFile('./src/views/index.html', (err, data) => {
        if(err) console.log(err);
        res.writeHead(200, 'OK', {
            'Content-Type': 'text/html',
            'Access-Control-Allow-Origin': '*'
        });
        return res.end(data);
    });
    
};

export default helloWorld;