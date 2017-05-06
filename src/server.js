import Hapi from 'hapi';
import mongojs from 'hapi-mongojs';
import Vision from 'vision';
import routes from './routes';
import dbOpts from './mongo-init';

const server = new Hapi.Server();   // server defined here

server.connection({
    host: 'localhost',
    port: process.env.PORT || 3000
});

server.register([Vision, {           // plugins here
    register: mongojs,               // mongodb connection plugin
    options: dbOpts
}], (err) => {
    if (err) {
        console.error(err);
    }

    for (const route of routes) {   // routing here
        server.route(route);
    }

    server.start(err => {           // server start here
        console.log('Our app is running on http://localhost:' + port);
        if (err) {
            console.error(err);
        }
    });
});
