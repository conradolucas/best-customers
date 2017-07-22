var Clients = require('./../entity/clients');

var Service = function(request, response, next) {

  var client = new Clients(request.body);

  client.save().then(function(client) {
    if (!client) {
      return response.status(404).json({
        status: false,
        data  : {}
      });
    }

    return response.status(200).json({
      status: true,
      data  : client
    });
  }).catch(function(error) {
      return response.status(500).json({
      status: false,
      data  : {}
    });
  });

};

module.exports = Service;
