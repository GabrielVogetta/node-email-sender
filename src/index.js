import express from 'express';
import sendEmail from './transporter.js';
import cors from 'cors';
import 'dotenv/config';

const port = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.use(cors({origin: '*'}));

app.post('/', async (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");

    if(!req.body.to){
        res.status(400).json({error: true, message: 'Requisição ruim!'});
        return;
    }

    // SE ESTIVER TUDO CORRETO

    try{
        const emailReq = await sendEmail({
            to: req.body.to,
            subject: req.body.subject,
            text: req.body.text,
        });
        
        res.status(201).json({
            error: null, message: 'Email enviado!', 
            mailResponse: emailReq
        });

    } catch (error){
        
        res.status(500).json({
            error: true, message: 'Email não enviado! Tente novamente mais tarde', 
            mailResponse: error
        });
    }
});

app.get('/', async (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");

    res.status(200).json({error: false, message: 'Olá, eu sou o node email sender! Para enviar um email use o método POST'});
});

// MÉTODOS NÃO PERMITIDOS

app.put('/', (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");

    res.status(405).json({error: true, message: 'Método não permitido!'});
});
app.patch('/', (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");

    res.status(405).json({error: true, message: 'Método não permitido!'});
});
app.delete('/', (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");

    res.status(405).json({error: true, message: 'Método não permitido!'});
});

app.listen(port, () => {
    console.log(`Running at port ${port}!`);
});