'use strict';

angular.module('Home')

.controller('HomeController',
    ['$scope', '$rootScope', 'UserService',
    function ($scope, $rootScope, UserService) {

    	$scope.loggedInUser = UserService.getUserDetails();

    }]);