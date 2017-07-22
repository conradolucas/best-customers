var Clients = require('./../entity/clients');

var Service = function(request, response, next) {
    var findById = Clients.findById(request.params.id).exec();
    var update   = Clients.update({
        _id: request.params.id
    }, {
        $set: request.body
    }, { multi: false }).exec();

    findById
        .then(function(product) {
            update
                .then(function(result) {
                    if (!result) {
                        return response.status(400)
                            .json({
                                status: false,
                                data  : {}
                            });
                    }

                    return response.status(200)
                        .json({
                            status: true,
                            data: result
                        });
                })
                .catch(function(err) {
                    return response.status(500)
                        .json({
                            status: false,
                            date  : {}
                        });
                });
        })
        .catch(function(err) {
            return response.status(500)
                .json({
                    status: false,
                    date  : {}
                });
        });
};

module.exports = Service;
