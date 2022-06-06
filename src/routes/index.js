import helloWorld from "../controllers/helloWorld.js";
import notFound from "../controllers/notFound.js";
import sendEmail from "../controllers/sendEmail.js";
import logRequest from '../logRequest.js';

const routes = (req, res) => {

    const {headers, method, url} = req;
    logRequest(method, url, headers.host, headers['user-agent']);

    if(req.url === '/'){
        return helloWorld(req, res);
    }else if(req.url === '/sendEmail'){
        return sendEmail(req, res);
    }else{
        return notFound(req, res); 
    }

    // if(req.method !== 'POST' && req.method !== 'GET'){
    //     methodNotAllowed(res);  
    // }else if(req.method === 'GET'){
    //     helloWorld(res);
    // }else{
    //     sendEmail(res);
    // }
};

export default routes;