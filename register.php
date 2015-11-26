<?php

        //Hier Kommen die Verbindungsdaten für die Datenbank hin!

        $username=$_POST['username'];
        $userpassword=$_POST['userpassword'];
        $host = "localhost";
        $user = "root";
        $pass= "";

        //DB Daten

        $databasename="cupcoffedb";
        $tableName= "logindata";


        //connection to the database
        $con = mysqli_connect($host, $user, $pass, $databasename, 3306);

        //Query Data from Database
        $result= mysqli_query( $con, "insert into $tableName VALUES (,$username,$userpassword)");


        //Da Wir ein Objectarray benötigen muss das Datenarray erst ins JSON format umgewandelt werden
        $jsonstring= json_encode(array_values($json));

        //Rückgabe der Daten
        echo $jsonstring;

        //beendet die Verbindung zur Datenbank
        mysqli_close($con);

?>
