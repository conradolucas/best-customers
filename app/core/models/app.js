require('angular');
require('angular-route');

var myClients     = require('./../controllers/myClients');
var routeConfig   = require('./../config/routeConfig');
//
var maskTel       = require('./../directives/maskTel');
var maskCep       = require('./../directives/maskCep');
var alertMsg      = require('./../directives/alertMsg');

angular.module('best-customers', ['ui.bootstrap','ngRoute']);
angular.module('best-customers').config(['$routeProvider',routeConfig]);

angular.module('best-customers').directive('maskTel',[maskTel]);
angular.module('best-customers').directive('maskCep',[maskCep]);
angular.module('best-customers').directive('alertMsg',[alertMsg]);

angular.module('best-customers').controller('myClients',['$scope','$http',myClients]);
