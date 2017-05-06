import Hapi from 'hapi';
import mongojs from 'hapi-mongojs';
import Vision from 'vision';
import routes from './routes';
import dbOpts from './mongo-init';

const server = new Hapi.Server();   // server defined here

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
console.log(port)

server.connection({
    host: 'localhost',
    port: port
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
        console.log('Our app is running on http://localhost:' + OPENSHIFT_NODEJS_PORT);
        if (err) {
            console.error(err);
        }
    });
});
