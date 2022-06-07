import transporter from '../api/transporter.js';
import methodNotAllowed from './methodNotAllowed.js';

const badRequest = (res) => {
    
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(400);

    return res.end(JSON.stringify({
        status: 400,
        error: true,
        message: 'Bad Request!',
    }));
};

const sendEmail = (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
	res.setHeader('Access-Control-Allow-Headers', '*');

	if(req.method === 'OPTIONS') {
		res.writeHead(200);
		res.end();
		return;
	}

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

                    res.setHeader('Content-Type', 'application/json');
                    res.writeHead(201);

                    return res.end(JSON.stringify({
                        status: 201,
                        error: null,
                        message: 'Email Enviado!',
                        emailResponse: emailReq
                    }));
                }else{

                    res.setHeader('Content-Type', 'application/json');
                    res.writeHead(500);
                    
                    return res.end(JSON.stringify({
                        status: 500,
                        error: true,
                        message: 'Houve um erro, tente novamente mais tarde!'
                    }));
                }

            }
        }catch{
            return badRequest(res);
        }

    });
};

export default sendEmail;