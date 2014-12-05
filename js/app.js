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
            }).when('/outside/register-user', {
                templateUrl: 'views/outside/register-user.html'
            }).when('/outside/signin', {
                templateUrl: 'views/outside/signin.html'
            }).when('/pages/dashboard', {
                templateUrl: 'views/pages/dashboard.html'
            }).otherwise({
                redirectTo: '/index'
            });
        }
    ]);
})();