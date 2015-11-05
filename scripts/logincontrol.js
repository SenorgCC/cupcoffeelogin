/**
 * Created by Alex on 03.11.2015.
 */
var app = angular.module('Cupcoffeelogin', [])
    .controller('logincontroller', function($scope){

        $scope.submit=function(username, userpassword) {
            //loginflag
            var logintest = false;

            //databasedummy
            $scope.accounts = [
                {id: 0, name: "test", passwort: "kek"},
                {id: 1, name: "admin", passwort: "admin"},
                {id: 2, name: "test2", passwort: "ke22k"}
            ];

            //suchenachkorrekten eingaben
            for (var i = 0; i <= $scope.accounts.length; i++) {
                if ($scope.accounts[i].name == username) {
                    if ($scope.accounts[i].passwort == userpassword) {
                        alert("WILLKOMMEN!");
                        //Hierhinkommt die weiterleitung
                        //keine weitere durchsuchung der schleife nötig, da einmalige nutzter
                        break;
                    }else{
                        alert("FALSCHER INPUT!");
                        //eingaben werden gecleart
                        $scope.username='';
                        $scope.userpassword='';
                        break;
                    }
                }
            }
        };
        $scope.register=function(){
            //öffnet ein neues fenster zum registrieren des nutzters
        };
    });
app.controller('registercontroller',function($scope){


});


