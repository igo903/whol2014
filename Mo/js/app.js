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

app.controller('bodyController',function($scope,$route, $location,$rootScope ,$timeout){
        $scope.slideDirection = null;
        $scope.navon = false;
        $rootScope.hideafterload = false;

        $timeout(function(){
                  $rootScope.hideafterload = true;  //delay 100ms seconds show splash
        },400);


        
});


app.controller('homelistController', function($scope, dataService) {
	dataService.getToRead().success(function(data){
		$scope.toreads = data;
	});
});


