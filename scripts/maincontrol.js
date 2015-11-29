/**
 * Created by alex on 26.11.2015.
 */

var app= angular.module('CupCoffeeMainpage', []);

app.controller('mainpagecontroller', function($scope){

        $scope.initall=function() {

            $scope.username = window.sessionStorage.getItem("Username");
            $scope.getKontostand($scope.username);

        };
        $scope.getKontostand=function(usrname){

               $.ajax({
                    type:'POST',
                    url:'getkontostand.php',
                    datatype:'json',
                    data:{username:usrname},
                    contenttype: 'json/html',
                    async:false,
                    success: function(data){
                        $scope.kontostand= JSON.parse(data);
                    }
                });


        };
        //FUNKTIONEN LOGIK!
});

app.controller('changePasswordCtrl', function($scope,$window){
    $(document).ready(function(){

        $('#WorngChangePassword').hide();
        $('#successfullChangePassword').hide();
        $('#WorngChangePasswordBtn').click(function(){
            $('#WorngChangePassword').hide();
        });

        $scope.changePassword=function(usrpassword1, usrpassword2){
            usrname= window.sessionStorage.getItem("Username");

            if(usrpassword1==usrpassword2){


                $.ajax({
                    type:'POST',
                    url:'changeuserpassword.php',
                    datatype:'json',
                    data:{username:usrname, userpassword:usrpassword1},
                    contenttype: 'json/html',
                    async:false,
                    success: function(data){

                        $('#successfullChangePassword').fadeIn('slow',function(){
                            $(this).delay(2000).fadeOut('slow');
                            //hiermit wird eine zurückführung zum login simuliert
                            $window.location.href= ('loginmainpage.html');

                        });

                    }
                });


            }else{
                $('#WorngChangePassword').fadeIn('slow');
                $scope.changepassword1='';
                $scope.changepassword2='';
            }

        };



    });



});

