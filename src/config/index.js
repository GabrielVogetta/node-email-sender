import 'dotenv/config';

export default {
    app: {
        port: process.env.PORT || 3001,
    },
    api : {
        fromName : process.env.FROM_NAME,
        fromEmail: process.env.FROM_EMAIL,
        authUser: process.env.AUTH_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        redirectUri: process.env.REDIRECT_URI,
        refreshToken: process.env.REFRESH_TOKEN,
    }
};