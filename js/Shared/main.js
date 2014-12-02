
angular.module('app.controllers', []).controller('AppCtrl', [
    '$scope', '$location', function($scope, $location) {
        $scope.isSpecificPage = function() {
            var path;
            path = $location.path();
            return _.contains([
                '/404',
                '/pages/500',
                '/pages/login',
                '/pages/signin',
                '/pages/signin1',
                '/pages/signin2',
                '/pages/signup',
                '/pages/signup1',
                '/pages/signup2',
                '/pages/forgot',
                '/pages/lock-screen'
            ], path);
        };
        return $scope.main = {
            brand: 'Square',
            name: 'Lisa Doe'
        };
    }
]);
