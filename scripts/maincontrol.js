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

