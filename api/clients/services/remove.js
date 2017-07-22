var Clients = require('./../entity/clients');

var Service = function(request, response, next) {

  var findById = Clients.findById(request.params.id).exec();
  var remove   = Clients.remove({
      _id: request.params.id
  });

  findById.then(function(product) {
    if (!product) {
      return response.status(404)
      .json({
        status: false,
        data  : {
          _id: request.params._id
        }
      });
    }

            remove
                .exec()
                .then(function() {
                    return response.status(200)
                              .json({
                                  status: true,
                                  data  : product
                              });
                })
                .catch(function(error) {
                    return response.status(500)
                              .json({
                                  status: false,
                                  data  : {}
                              });
                });
        })
        .catch(function(error) {
            return response.status(500)
                .json({
                    status: false,
                    data  : {}
                });
        });
};

module.exports = Service;
