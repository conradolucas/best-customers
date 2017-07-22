module.exports = function(){
    return{
        require: "ngModel",
        link: function(scope, element,attributes,ctrl){
            /*console.log(scope);
            console.log(element);
            console.log(attributes);*/
            element.bind("keyup",function(){
                var _formatCep = function(value){
                    value = value.replace(/[^0-9]+/g,"");
                    value = value.substring(0,5) + "-" + value.substring(5,8);
                    return value;
                };
                /*console.log(ctrl.$viewValue);*/
                ctrl.$setViewValue(_formatCep(ctrl.$viewValue));
                ctrl.$render();
            });
            ctrl.$parsers.push(function(value){
                if(value.length > 8){
                    /*value = value.replace(/[^0-9]+/g,"");*/
                    return value;
                }

            });

        }
    };
};
