let mqtt = require('mqtt'),
  config = require('./config.json');

client = mqtt.connect(config.broker.url,{
  clientId:config.clients.clientId1
});

client.on('connect', function () {

});

client.on('message', function (topic, message) {
    var message = message.toString().toUpperCase();
});
