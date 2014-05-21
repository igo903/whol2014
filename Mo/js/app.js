var app = angular.module("wholApp", ['ngRoute','ngAnimate','ngTouch']);

//url mapping
app.config(function($routeProvider) {
    $routeProvider
        .when('/Dashboard/Default',
            {
                controller: 'defaultController',
                templateUrl: 'partials/default.html',
                title: 'logo'
            })
});


app.service('dataService', function($http, $route) {

});


app.controller('homelistController', function($scope, dataService, $filter) {

});