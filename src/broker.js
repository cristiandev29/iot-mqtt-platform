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
  if(client) console.log(`Client ${client} published a package with topic -> ${packet.topic} and payload -> ${packet.payload}`);
});

broker.on('ready', () => console.log('Broker ready'));

broker.on('subscribed', (topic) => console.log(`Any client subscribed to ${topic} topic`));
