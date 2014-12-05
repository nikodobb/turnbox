
angular.module('app.controllers', []).controller('AppCtrl', [
    '$scope', '$location', function($scope, $location) {
        $scope.isOutsidePage = function() {
            var path;
            path = $location.path();
            return _.contains([
                '/index',
                '/outside/register-user',
                '/outside/signin'
            ], path);
        };
        return $scope.main = {
            brand: 'Square',
            name: 'Lisa Doe'
        };
    }

]);
