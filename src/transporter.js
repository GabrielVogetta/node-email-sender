import nodemailer from 'nodemailer';
import {google} from 'googleapis';
import config from './config.js';

const oAuth2Client = new google.auth.OAuth2(config.api.clientId, config.api.clientSecret, config.api.redirectUri);
oAuth2Client.setCredentials({refresh_token: config.api.refreshToken});

export default async function sendEmail({to, subject, text}){
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: config.authUser,
                clientId: config.clientId,
                clientSecret: config.clientSecret,
                refreshToken: config.refreshToken,
                accessToken: accessToken
            }
        });

        const mailOptions = {
            from: `${config.fromName} <${config.fromEmail}>`,
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