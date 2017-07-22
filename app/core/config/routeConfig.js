module.exports = function($routeProvider){
    $routeProvider.when("/clients",{
        templateUrl:"views/clients.html",
        controller:"myClients",
        resolve:{
            routeName:function(){
                return "Client list";
            }
        }
    });
};
