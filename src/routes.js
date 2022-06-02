import Controller from "./controller/index.js";
import logRequest from './logRequest.js';

const routes = (req, res) => {

    const {headers, method, url} = req;
    logRequest(method, url, headers.host, headers['user-agent']);

    if(req.method !== 'POST' && req.method !== 'GET'){
        Controller.methodNotAllowed(res);  
    }else if(req.method === 'GET'){
        Controller.helloWorld(res);
    }else{
        Controller.sendEmail(req, res);
    }
};

export default routes;