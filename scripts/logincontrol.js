/**
 * Created by Alex on 03.11.2015.
 */
var app = angular.module('Cupcoffeelogin', [])
    .controller('logincontroller', function($scope){

        $scope.submit=function(username, password){
            alert(username);
        };
        $scope.register=function(){
            $scope.ausgabe="nope!";
        };
    });


