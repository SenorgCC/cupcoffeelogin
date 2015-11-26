/**
 * Created by alex on 26.11.2015.
 */

var app= angular.module('CupCoffeeMainpage', []);

app.controller('mainpagecontroller', function($scope){

    $scope.username=window.sessionStorage.getItem("Username");

    alert($scope.username);
    //FUNKTIONEN LOGIK!
});

