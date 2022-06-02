import fs from 'fs';
import transporter from '../transporter.js';

const Controller = {

    helloWorld(res){
        fs.readFile('./src/views/index.html', (err, data) => {
            if(err) console.log(err);
            res.writeHead(200, 'OK', {
                'Content-Type': 'text/html',
                'Access-Control-Allow-Origin': '*'
            });
            return res.end(data);
        });
    },

    methodNotAllowed(res){
        res.writeHead(405, 'Method Not Allowed', {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });

        res.end(JSON.stringify({
            status: 405,
            error: true,
            message: 'Method Not Allowed!',
        }));
    },

    sendEmail(req, res){

        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', async ( ) => {
            const {to, subject, text} = JSON.parse(body);

            try{
                const emailReq = await transporter.sendEmail({
                    to: to,
                    subject: subject,
                    text: text,
                });
                
                res.writeHead(201, 'Created', {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                });
        
                res.end(JSON.stringify({
                    status: 201,
                    error: null,
                    message: 'Email enviado!',
                    emailResponse: emailReq
                }));
            
            } catch (error){

                console.log(error);
                
                res.writeHead(500, 'Internal Server Error', {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                });
        
                res.end(JSON.stringify({
                    status: 500,
                    error: error,
                    message: 'Internal Server Error'
                }));

            }

        });
    
    }
};

export default Controller;