/**
 * Created by Alex on 03.11.2015.
 */
var app = angular.module('Cupcoffeelogin', [])
    .controller('logincontroller', function($scope,$http){

        $(document).ready(function() {
            $('#loginAlertwarning').hide();
            $('#loginAlertwelcome').hide();
            $('#worngAlarmLoginBtn').click(function () {
                $('#loginAlertwarning').fadeOut();
            });
            $('#welcomeAlarmBtn').click(function () {
                $('#loginAlertwelcome').fadeOut();
            });


            $scope.submit=function(usrname, usrpassword) {
                //loginflag vorerst zum test ausfrühren, extremer pfusch!
                var correctloginflag = false;

                //JQuery Kommunikation durch PHP mit der mysql db.
                //PHP-Datei enthällt die function logincheck, die true oder false zurück gibt



                //AJAX Aufruf mittels JQuery
                var result =$.ajax({
                    type:'GET',
                    url:'firsttrylogin.php',
                    datatype:'json',
                    contenttype: 'application/json',
                    async:false,
                    success: function(data){

                        //JSON.parse wird benötigt, damit die zurückgegebenen Daten im Objekt Array
                        //Format erstellt werden
                        $scope.accounts= JSON.parse(data);
                    }
                });





                //suchenachkorrekten eingaben
                for (var i = 0; i <= $scope.accounts.length-1; i++) {
                    if ($scope.accounts[i].name == usrname) {
                        if ($scope.accounts[i].passwort == usrpassword) {
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



