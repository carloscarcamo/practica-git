(function(){
    angular.module('myApp', [])
    
    .directive('count', function(){
        return {
            restrict:'E',
            template:'<a hef="#">click para contar</a>',
            require:'ngModel',
            link:function(scope, elm, attrs, ngModel){
                elm.on('click', function(){
                    ngModel.$setViewValue(ngModel.$viewValue + 1);
                    scope.$apply();
                });
            }
        }
    })
    
    .controller('appCtrl', ['$scope', function($scope){
        $scope.count = 0;
        $scope.$watch('count', function(n, o){
            if(n!=o){
                console.log("cuenta actualizada a: " + n);
            }
        });
    }]);
})();
