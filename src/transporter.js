import nodemailer from 'nodemailer';
import {google} from 'googleapis';
import config from './config/index.js';

const oAuth2Client = new google.auth.OAuth2(config.api.clientId, config.api.clientSecret, config.api.redirectUri);
oAuth2Client.setCredentials({refresh_token: config.api.refreshToken});

async function sendEmail({to, subject, text}){
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        console.log(accessToken);
        
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: config.api.authUser,
                clientId: config.api.clientId,
                clientSecret: config.api.clientSecret,
                refreshToken: config.api.refreshToken,
                accessToken: accessToken
            }
        });

        const mailOptions = {
            from: `${config.api.fromName} <${config.api.fromEmail}>`,
            to: to,
            subject: subject,
            text: text,
        };

        const result = transport.sendMail(mailOptions);
        return result;

    } catch (error) {
        return error;
    }
};

export default {
    sendEmail
};