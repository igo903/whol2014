var app = angular.module("wholApp", ['ngRoute','ngAnimate','ngTouch']);

//url mapping
app.config(function($routeProvider) {
    // $routeProvider
    //     .when('/Dashboard/Default',
    //         {
    //             controller: 'homelistController',
    //             templateUrl: 'partials/homelist.html',
    //             title: 'logo'
    //         })
    //     .otherwise(
    //     	{   controller: 'homelistController',
    //             templateUrl: 'partials/homelist.html',
    //     		redirectTo: '/Dashboard/Default'
    //     	}
    //     )
});


app.service('dataService', function($http, $route) {

    this.getToRead = function() {
                return $http.get('data/homelist.json', {
                        'cache': true
                });
        };

});


app.controller('homelistController', function($scope, dataService) {
	dataService.getToRead().success(function(data){
		$scope.toreads = data;
	});
});


