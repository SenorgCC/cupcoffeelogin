<?php

        //Hier Kommen die Verbindungsdaten für die Datenbank hin!

        $username=$_POST['username'];
        $userpassword=$_POST['userpassword'];
        $host = "localhost";
        $user = "root";
        $pass= "";

        //DB Daten
        echo("Test1");    $databasename="cupcoffedb";
        $tableName= "logindata";

        //connection to the database
        $con = mysqli_connect($host, $user, $pass, $databasename, 3306);

        //Query Data from Database
        //Tabellenaufbau: ID(10)Auto_inc,Name varchar(20), Password varchar(20), Guthaben int (20)
        $result= mysqli_query( $con, "insert into $tableName (Name, Password, Guthaben) VALUES ('$username','$userpassword',0)");


        //beendet die Verbindung zur Datenbank
        mysqli_close($con);

?>
