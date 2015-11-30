/**
 * Created by Harm on 30.11.2015.
 */

var app= angular.module('CupCoffeeAdminpage', []);

app.controller('adminpagecontroller', function($scope,$window,$http){

    $scope.initall=function()
    {
        $scope.username = window.sessionStorage.getItem("Username");
    };




    $scope.abmelden=function(event)
    {
        window.sessionStorage.removeItem("Username");
        event.stopPropagation();
        $window.location.href=('loginmainpage.html');
    };


});
