require('angular');
require('angular-route');

var myClients     = require('./../controllers/myClients');
var routeConfig   = require('./../config/routeConfig');

angular.module('best-customers', ['ui.bootstrap','ngRoute']);
angular.module('best-customers').config(['$routeProvider',routeConfig]);
angular.module('best-customers').controller('myClients',['$scope','$http',myClients]);
