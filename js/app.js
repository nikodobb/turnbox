/**
 * Created by nikodobb on 24/11/14.
 */
(function(){
    var app = angular.module('app', [
        'ngRoute',
        'app.controllers'
    ])

    .config([
        '$routeProvider', function($routeProvider) {
            return $routeProvider.when('/', {
                redirectTo: '/index'
            }).when('/index', {
                templateUrl: 'views/index-content.html'
            }).otherwise({
                redirectTo: '/index'
            });
        }
    ]);
})();