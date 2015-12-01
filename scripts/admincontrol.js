/**
 * Created by Harm on 30.11.2015.
 */

var app= angular.module('CupCoffeeAdminpage', []);

app.controller('adminpagecontroller', function($scope,$window,$http){

    $scope.inital=function()
    {
        $scope.username = window.sessionStorage.getItem("Username");
    };




    $scope.abmelden=function()
    {

        window.sessionStorage.removeItem("Username");
        event.stopPropagation();
        $window.location.href=('loginmainpage.html');
    };


});
    app.controller('adminviewcontroller', function($scope){
        $scope.init=function(){

            $scope.showkostenflag=true;
            $scope.showrechnungflag=false;
            $scope.showwarteschlangeflag=false;
        }
        $scope.showrechnung=function()
        {
            $scope.showkostenflag=false;
            $scope.showrechnungflag=true;
            $scope.showwarteschlangeflag=false;
        }
        $scope.showwarteschlange=function(){
            $scope.showrechnungflag=false;
            $scope.showkostenflag=false;
            $scope.showwarteschlangeflag=true;
        }
    });