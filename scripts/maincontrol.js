/**
 * Created by alex on 26.11.2015.
 */

var app = angular.module('CupCoffeeMainpage', []);

app.controller('mainpagecontroller', function ($scope, $window, $http, User) {
    $scope.inital = function () {

        User.name = window.sessionStorage.getItem("Username");
        $scope.username = User.name;
        $scope.getKontostand($scope.username);
        $scope.getQueuePos();

    };

    $scope.getKontostand = function (usrname) {
        $.ajax({
            type: 'POST',
            url: 'getkontostand.php',
            datatype: 'json',
            data: {username: usrname},
            contenttype: 'json/html',
            async: false,
            success: function (data) {
                User.Kontostand = JSON.parse(data);
                $scope.Username = User.Kontostand;
            }
        });

    };

    $scope.addtoQueue = function (konstostand) {
        User.Kontostand = kontostand + 2.50;
        $.ajax({
            type: 'POST',
            url: 'addToQueue.php',
            datatype: 'json',
            data: {username: $scope.username, konto: User.Kontostand},
            contenttype: 'json/html',
            async: false,
            success: function (data) {

                $scope.getKontostand($scope.username);
                $scope.getQueuePos();
            }

        });
    };

    $scope.getQueuePos = function () {

        $scope.actualqueue = User.actualqueue;
        $.ajax({
            type: 'POST',
            url: 'getqueuepos.php',
            datatype: 'json',
            async: false,
            success: function (data) {

                User.actualqueue = data;

            }
        })
    };

    //

    $scope.abmelden = function () {
        window.sessionStorage.removeItem("Username");
        event.stopPropagation();
        $window.location.href = ('loginmainpage.html');
    };
    $scope.usercheck = function () //Prüfen
    {
        User.name = window.sessionStorage.getItem("Username");
        $scope.username = User.name;

        if ($scope.username != 'admin') {
            $window.location.href = ('mainpage.html');
        }
        else {
            $window.location.href = ('adminpage.html');
        }
    };

});

app.controller('changePasswordCtrl', function ($scope, $window) {
    $(document).ready(function () {

        $('#WorngChangePassword').hide();
        $('#successfullChangePassword').hide();
        $('#WorngChangePasswordBtn').click(function () {
            $('#WorngChangePassword').hide();
        });

        $scope.changePassword = function (usrpassword1, usrpassword2) {
            usrname = window.sessionStorage.getItem("Username");

            if (usrpassword1 == usrpassword2) {

                $.ajax({
                    type: 'POST',
                    url: 'php/changeuserpassword.php',
                    datatype: 'json',
                    data: {username: usrname, userpassword: usrpassword1},
                    contenttype: 'json/html',
                    async: false,
                    success: function (data) {

                        $('#successfullChangePassword').fadeIn('slow', function () {
                            $(this).delay(2000).fadeOut('slow');
                            //hiermit wird eine zurückführung zum login simuliert
                            $window.location.href = ('mainpage.html');

                        });

                    }
                });

            }
            else {
                $('#WorngChangePassword').fadeIn('slow');
                $scope.changepassword1 = '';
                $scope.changepassword2 = '';
            }

        };

    });

});

