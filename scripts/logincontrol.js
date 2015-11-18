/**
 * Created by Alex on 03.11.2015.
 */
var app = angular.module('Cupcoffeelogin', [])
    .controller('logincontroller', function($scope,$http){

        $(document).ready(function(){
            $('#loginAlertwarning').hide();
            $('#loginAlertwelcome').hide();
            $('#worngAlarmLoginBtn').click( function () {
               $('#loginAlertwarning').fadeOut();
            });
            $('#welcomeAlarmBtn').click(function(){
               $('#loginAlertwelcome').fadeOut();
            });


            $scope.submit=function(username, userpassword) {
                //loginflag vorerst zum test ausfrühren, extremer pfusch!
                var correctloginflag = false;

                //databasedummy
                //NUR FÜR DEN HALLO WORLD TEST NUTZTEN !

                 $scope.accounts = [
                 {id: 0, name: "test", passwort: "kek"},
                 {id: 1, name: "admin", passwort: "admin"},
                 {id: 2, name: "test2", passwort: "ke22k"}
                 ];

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
                /*
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
                */
                //suchenachkorrekten eingaben
                for (var i = 0; i <= $scope.accounts.length-1; i++) {
                    if ($scope.accounts[i].name == username) {
                        if ($scope.accounts[i].passwort == userpassword) {
                            correctloginflag=true;
                            //keine weitere durchsuchung der schleife nötig, da einmalige nutzter
                            break;
                        }
                    }
                }

                if(correctloginflag == true){
                    $('#loginAlertwelcome').fadeIn();
                    //Hierhinkommt die weiterleitung
                }else{
                    $('#loginAlertwarning').fadeIn();
                    //die inputfelder sollen wieder leer angezeigt werden
                    $scope.username='';
                    $scope.userpassword='';

                }
            };
            $scope.register=function(){
            //öffnet ein neues fenster zum registrieren des nutzters
        };
        });
    });
app.controller('registercontroller',function($scope){
    //registrierung kommt hierhin


});



