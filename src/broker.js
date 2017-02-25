let mosca = require('mosca'),
	moment = require('moment'),
	_ = require('underscore'),
	config = require('./config.json'),
	broker;

broker = new mosca.Server({
  port: config.port,
  backend: config.backend
});

broker.on('clientConnected', (client) => console.log(`Client with id ${client.id} is connected`));

broker.on('published', (packet, client) => {

});

broker.on('ready', () => console.log('Broker ready'));

broker.on('subscribed', (topic) => console.log(topic));
