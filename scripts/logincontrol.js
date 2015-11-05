/**
 * Created by Alex on 03.11.2015.
 */

var app = angular.module('Cupcoffeelogin', [])
    .controller('logincontroller', function($scope){

        $scope.kekalert=function(){
            $scope.ausgabe="nope!";
        };
        $scope.submit=function(){
            alert("Loginfunction kommt hierhin");
        };
    });


