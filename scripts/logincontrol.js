/**
 * Created by Alex on 04.11.2015.
 */
var app = angular.module('Cupcoffeelogin', [])
    .controller('logincontroller', function($scope){
        $scope.articles =[
            {id: 0, name: "Topkek", price: 42},
            {id: 1, name: "lolz", price: 4.2},
            {id: 2, name: "Tek", price: 33},
            {id: 3, name: "kektop", price: 12}
        ];
        $scope.kekalert=function(){
            $scope.ausgabe="nope!";
        };
    });


