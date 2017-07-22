module.exports = function(){
    return{
        require: "ngModel",
        link: function(scope, element,attributes,ctrl){
            /*console.log(scope);
            console.log(element);
            console.log(attributes);*/
            element.bind("keyup",function(){
                var _formatTel = function(telefone){
                  //(99)9999-9999 - 13dig
                  //(99)99999-9999 - 14dig
                  telefone = telefone.replace(/[^0-9]+/g, "");
                  if(telefone.length > 0){
                    telefone = telefone.substring(-1,0) + "(" + telefone.substring(0);
                  }
                  if(telefone.length > 3){
                    telefone = telefone.substring(0,3) + ")" + telefone.substring(3);
                  }
                  if(telefone.length == 12){
                    telefone = telefone.substring(0,8) + "-" + telefone.substring(8);
                  }else if(telefone.length >= 13){
                    telefone = telefone.substring(0,9) + "-" + telefone.substring(9,13);
                  }
                    return telefone;
                };
                /*console.log(ctrl.$viewValue);*/
                ctrl.$setViewValue(_formatTel(ctrl.$viewValue));
                ctrl.$render();
            });
            ctrl.$parsers.push(function(value){
                if(value.length > 10){
                    /*value = value.replace(/[^0-9]+/g,"");*/
                    return value;
                }

            });

        }
    };
};
