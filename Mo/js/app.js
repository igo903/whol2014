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
        .otherwise(
        	{
        		redirectTo: '/Dashboard/Default'
        	}
        )
});


app.service('dataService', function($http, $route) {
	this.getToRead = function() {
        return $http.get('data/homelist.json', {
                'cache': true
        });
    };

});


app.controller('homelistController', function($scope, dataService) {
	dataService.getToread().success(function(){
		$scope.toreads = data;
	});
});
