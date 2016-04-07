/**
 * Created by Alex on 03.11.2015.
 */
var app = angular.module('Cupcoffeelogin', [])
    .controller('authenticationctrl', function($scope,$http,$window)
    {

        $(document).ready(function()
        {
            $('#loginAlertwarning').hide();
            $('#loginAlertwelcome').hide();
            $('#worngAlarmLoginBtn').click(function ()
            {
                $('#loginAlertwarning').fadeOut();
            });
            $('#welcomeAlarmBtn').click(function ()
            {
                $('#loginAlertwelcome').fadeOut();
            });


            $scope.submit=function(usrname, usrpassword)
            {
                //loginflag vorerst zum test ausfrühren, extremer pfusch!
                var correctloginflag = false;
                var adminflag= false;

                //JQuery Kommunikation durch PHP mit der mysql db.
                //PHP-Datei enthällt die function logincheck, die true oder false zurück gibt



                //AJAX Aufruf mittels JQuery
                var result =$.ajax(
                    {
                    type:'GET',
                    url:'php/firsttrylogin.php',
                    datatype:'json',
                    contenttype: 'application/json',
                    async:false,
                    success: function(data)
                    {

                        //JSON.parse wird benötigt, damit die zurückgegebenen Daten im Objekt Array
                        //Format erstellt werden
                        $scope.accounts= JSON.parse(data);
                    }
                });

                //suchenachkorrekten eingaben
                for (var i = 0; i <= $scope.accounts.length-1; i++)
                {
                    if ($scope.accounts[i].name == usrname)
                    {
                        if ($scope.accounts[i].passwort == usrpassword)
                        {
                            correctloginflag=true;
                            if($scope.accounts[i].IsAdmin == 1)
                            {
                                adminflag = true;
                            }
                            //keine weitere durchsuchung der schleife nötig, da einmalige nutzter
                            break;
                        }
                    }
                }

                if(correctloginflag == true)
                {
                    $('#loginAlertwelcome').fadeIn('slow',function()
                    {
                        $(this).delay(800).fadeOut('slow');
                        if(adminflag == true)
                        {
                            window.sessionStorage.setItem("Username",usrname);
                            $window.location.href= ('adminpage.html');
                        }
                        else
                        {
                            window.sessionStorage.setItem("Username",usrname);
                            $window.location.href= ('mainpage.html');
                        }
                    });
                }
                else
                {
                    $('#loginAlertwarning').fadeIn();
                    //die inputfelder sollen wieder leer angezeigt werden
                    $scope.username='';
                    $scope.userpassword='';
                }
            };
        });
    });
app.controller('registercontroller',function($scope,$http,$window)
{

    $(document).ready(function()
    {
        $('#PasswordWarning').hide();
        $('#WorngPasswordBtn').click(function ()
        {
            $('#PasswordWarning').fadeOut();
        });
        $('#successfullcreation').hide();


        $scope.register=function(usrname, usrpassword1,usrpassword2)
        {
            //öffnet ein neues fenster zum registrieren des nutzters

            korrektpasswordflag=false;


            if(usrpassword1==usrpassword2)
            {

                $.ajax({
                    type:'POST',
                    url:'php/register.php',
                    datatype:'json',
                    data:{username:usrname,userpassword:usrpassword1},
                    contenttype: 'application/json',
                    async:false,
                    success: function(data){


                        $('#successfullcreation').fadeIn('slow',function()
                        {
                            $(this).delay(2000).fadeOut('slow');
                            //hiermit wird eine zurückführung zum login simuliert
                            $window.location.href= ('loginmainpage.html');

                        });


                    }
                });

            }
            else
            {
                $('#PasswordWarning').fadeIn();
                $scope.userregpassword1='';
                $scope.usrregpassword2='';

            }


        };

    });


});
app.controller('loginmaincontroller', function($scope){
   $scope.init=function()
   {
       $scope.showloginflag=true;
       $scope.showregflag=false;
   };
    $scope.showregister=function()
    {
        $scope.showregflag=!$scope.showregflag;
        $scope.showloginflag=!$scope.showloginflag;
    }
});



