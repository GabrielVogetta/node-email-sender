import express from 'express';
import { sendMail } from './transporter.js';
import cors from 'cors';
import 'dotenv/config';

const port = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/', async (req, res, next) => {

    if(!req.body.to){
        res.status(400).json({error: true, message: 'Requisição ruim!'});
        return;
    }

    // SE ESTIVER TUDO CORRETO

    const mailResponse = await sendMail({
        from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text
    });

    if(mailResponse.accepted){
        res.status(201).json({
            error: null, message: 'Email enviado!', 
            mailResponse: mailResponse
        });
    }else{
        res.status(500).json({
            error: true, message: 'Email não enviado! Tente novamente mais tarde', 
            mailResponse: mailResponse
        });
    }

    next();
});

app.get('/', async (req, res, next) => {
    res.status(200).json({error: false, message: 'Olá, eu sou o node email sender! Para enviar um email use o método POST'});

    next();
});

// MÉTODOS NÃO PERMITIDOS

app.put('/', (req, res) => {
    res.status(405).json({error: true, message: 'Método não permitido!'});

    next();
});
app.patch('/', (req, res, next) => {
    res.status(405).json({error: true, message: 'Método não permitido!'});

    next();
});
app.delete('/', (req, res, next) => {
    res.status(405).json({error: true, message: 'Método não permitido!'});
    next();
});

app.listen(port, () => {
    console.log(`Running at port ${port}!`);
});