var Clients = require('./../entity/clients');

var Service = function(request, response, next) {

  var find = {};

  if (request.params.id) {
    find = Clients.findById(request.params.id).exec();
  }

  if (!request.params.id) {
    find = Clients.find({}).exec();
  }

  find.then(function(result) {
    if (!result) {
      return response.status(404).json({
        status: false,
        data  : {}
      });
    }

    return response.status(200).json({
      status: true,
      data  : result
    });
  }).catch(function(error) {
    return response.status(500).json({
      status: false,
      data  : {}
    });
  });
};

module.exports = Service;
