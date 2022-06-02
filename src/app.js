import http from 'http';
import config from './config/index.js';
import routes from './routes.js';

const server = http.createServer(routes);

server.listen(config.app.port, config.app.host, () => {
    console.log(`Server running at \x1b[34mhttp://${config.app.host}:${config.app.port}\x1b[0m`);
});