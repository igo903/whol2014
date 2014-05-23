var app = angular.module("wholApp", ['ngRoute','ngAnimate','ngTouch']);

//url mapping
app.config(function($routeProvider) {
    $routeProvider
        .when('/Dashboard/PopupLogin',
            {
                controller: 'homelistController',
                templateUrl: 'partials/loginpopup.html',
                title: 'logo'
            })
        .otherwise(
        	{   controller: 'homelistController',
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

app.controller('bodyController',function(){
    
});


app.controller('homelistController', function($scope, dataService) {
	dataService.getToRead().success(function(data){
		$scope.toreads = data;
	});
});


