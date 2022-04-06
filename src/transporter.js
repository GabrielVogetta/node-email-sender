import nodemailer from 'nodemailer';
import 'dotenv/config';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASS,
    },
    tls: {
        rejectUnauthorized: false,
    }
});

export async function sendMail({from, to, subject, text}){
    const res = await transporter.sendMail({
        subject: subject,
        from: from,
        to: to,
        text: text
    });

    return res;
};