/**
 * Created by Harm on 30.11.2015.
 */

var app = angular.module('CupCoffeeAdminpage', []);

app.controller('adminpagecontroller', function ($scope, $window, $http,User) {

    $scope.inital = function () {
        User.name = window.sessionStorage.getItem("Username");
        $scope.username = User.name;
    };

    $scope.abmelden = function () {

        window.sessionStorage.removeItem("Username");
        $window.location.href = ('loginmainpage.html');
    };


});
app.controller('adminviewcontroller', function ($scope) {
    $scope.showkosten = function () {
        $scope.showkostenflag = true;
        $scope.showrechnungflag = false;
        $scope.showwarteschlangeflag = false;
    };
    $scope.showrechnung = function () {
        $scope.showkostenflag = false;
        $scope.showrechnungflag = true;
        $scope.showwarteschlangeflag = false;
    };
    $scope.showwarteschlange = function () {
        $scope.showkostenflag = false;
        $scope.showrechnungflag = false;
        $scope.showwarteschlangeflag = true;
    };

    $scope.highlightaktiv = function (aktive) {

        if (aktive == 'kosten') {
            $('#kosteneinstellenlbl').addClass("active");
            $('#rechnungDruckenlbl').removeClass("active");
            $('#warteschlangenlbl').removeClass("active");

        }
        if (aktive == 'rechnung') {
            $('#kosteneinstellenlbl').removeClass("active");
            $('#rechnungDruckenlbl').addClass("active");
            $('#warteschlangenlbl').removeClass("active");
        }

        if (aktive == 'schlange') {
            $('#kosteneinstellenlbl').removeClass("active");
            $('#rechnungDruckenlbl').removeClass("active");
            $('#warteschlangenlbl').addClass("active");
        }
    }
});