// import sendEmail from './transporter.js';
// import cors from 'cors';
import http from 'http';
import config from './config.js';

const server = http.createServer(async (req, res) => {

    if(req.method !== 'POST' && req.method !== 'GET'){
        res.writeHead(405, 'Method Not Allowed', {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        
        const json = JSON.stringify({
            status: 405,
            error: true,
            message: 'Método não permitido!',
        });

        res.end(json);
    }

    if(req.method === 'GET'){
        res.writeHead(200, 'OK', {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        
        const json = JSON.stringify({
            status: 200,
            error: null,
            message: 'Olá, eu sou o node email sender! Para enviar um email use o método POST',
        });

        res.end(json);
    }

    if(req.method === 'POST'){
        // if(!req.body || !req.body.to){
        //     res.writeHead(400, 'Bad Request', {
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': '*'
        //     }); 

        //     const json = JSON.stringify({
        //         status: 400,
        //         error: true,
        //         message: 'Má requisição'
        //     });

        //     res.end(json);

        //     return;
        // }

        res.writeHead(201, 'Created', {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });

        const json = JSON.stringify({
            status: 201,
            error: null,
            message: 'Email enviado!',
        });

        res.end(json);

        // let body = '';

        // req.on('data', chunk => {
        //     console.log(chunk);
        // });

        // req.on('end', () => {
        //     const {to, subject, text} = JSON.parse(body);

        //     const json = JSON.stringify({
        //         status: 201,
        //         error: null,
        //         message: 'Email enviado!',
        //         to: to,
        //         subject: subject,
        //         text: text
        //     });

        //     console.log(json);

        //     //----------------------------------------//
        //     // const buffers = [];

        //     // for await (const chunk of req) {
        //     //     buffers.push(chunk);
        //     // }

        //     // const data = Buffer.concat(buffers).toString();

        //     // console.log(JSON.parse(data).todo); // 'Buy the milk'
        //     // res.end();

        //     res.end(json);
        // });

        // try{
        //     const emailReq = await sendEmail({
        //         to: req.body.to,
        //         subject: req.body.subject,
        //         text: req.body.text,
        //     });
            
        //     res.status(201).json({
        //         error: null, message: 'Email enviado!', 
        //         mailResponse: emailReq
        //     });
    
        // } catch (error){
            
        //     res.status(500).json({
        //         error: true, message: 'Email não enviado! Tente novamente mais tarde', 
        //         mailResponse: error
        //     });
        // }

    }
});

server.listen(config.server.port);