import transporter from '../api/transporter.js';
import methodNotAllowed from './methodNotAllowed.js';

const badRequest = (res) => {
    res.writeHead(400, 'Bad Request!', {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });

    return res.end(JSON.stringify({
        status: 400,
        error: true,
        message: 'Bad Request!',
    }));
};

const sendEmail = (req, res) => {
    
    if(req.method !== 'POST'){
        return methodNotAllowed(res);
    }

    let body;
    
    req.on('data', chunk => {
        try{
            body = JSON.parse(chunk);
        }catch{
            return;
        }
    });

    req.on('end', async () => {
        try{
            if(body.to){
                
                const emailReq = await transporter.sendEmail({
                    to: body.to,
                    subject: body.subject,
                    text: body.text,
                });
                
                if(emailReq.accepted){
                    res.writeHead(201, 'Created', {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    });

                    return res.end(JSON.stringify({
                        status: 201,
                        error: null,
                        message: 'Created',
                        emailResponse: emailReq
                    }));
                }else{
                    res.writeHead(500, 'Internal Server Error', {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    });
                    
                    return res.end(JSON.stringify({
                        status: 500,
                        error: true,
                        message: 'Internal Server Error'
                    }));
                }

            }
        }catch{
            return badRequest(res);
        }

    });
};

export default sendEmail;