module.exports = function(){
    return {
        template:  `<div class="alert alert-success text-center">
                <p><b ng-transclude></b></p>
            </div>`,
        replace: false,
        restrict:"AE",
        scope:{
            title: '@'
        },
        transclude: true
    };
};
