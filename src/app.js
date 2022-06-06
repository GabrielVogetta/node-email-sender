import http from 'http';
import config from './config/index.js';
import routes from './routes/index.js';

const server = http.createServer(routes);

server.listen(config.app.port, config.app.host, () => {
    console.log(`Server running at port \x1b[34m${config.app.port}\x1b[0m`);
});