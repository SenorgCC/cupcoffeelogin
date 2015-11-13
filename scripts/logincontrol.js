/**
 * Created by Alex on 03.11.2015.
 */
var app = angular.module('Cupcoffeelogin', [])
    .controller('logincontroller', function($scope,$http){

        $scope.submit=function($username, $userpassword) {
            //loginflag
            var logintest = false;

            //databasedummy
            /*
             $scope.accounts = [
             {id: 0, name: "test", passwort: "kek"},
             {id: 1, name: "admin", passwort: "admin"},
             {id: 2, name: "test2", passwort: "ke22k"}
             ];
             */
            /* ERSTE Umsetzung mit Angular
             $http({
             method: 'GET',
             url: 'firsttrylogin.php'
             }).then(function successCallback(response) {
             //Die Funktion benötigt nur die antwort, ob es den Nutzer gibt oder nicht daher reicht
             //eine boolische Auswertung
             $usernamedata=response;
             if($usernamedata!=''){

             alert("willkommen!");
             }
             }, function errorCallback(response) {
             alert("keine Datenbankverbindung!")
             });
             */
            //JQuery Kommunikation durch PHP mit der mysql db.
            //PHP-Datei enthällt die function logincheck, die true oder false zurück gibt

            alert("username:"+$username+" userpassword:"+$userpassword);
            $.ajax({
                type:"GET",
                url:'firsttrylogin.php',
                datatype:'json',
                data:{functionname: 'login', arguments:[$username,$userpassword]},
                success: function(obj, textstatus){
                    //$.parseJSON(obj);
                    if(!(obj.error)){
                        $responsedata=obj.result;
                        alert(JSON.stringify($responsedata));
                    }else{

                        alert("ERROR!");
                    }

                }
            });
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



