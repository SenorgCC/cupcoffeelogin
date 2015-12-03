<?php

        //Hier Kommen die Verbindungsdaten für die Datenbank hin!

        $username=$_POST['username'];
        $userkontostand=$_POST['konto'];
        $host = "localhost";
        $user = "root";
        $pass= "";

        //DB Daten
        $databasename="cupcoffedb";
        $tableName= "logindata";
        $tableName2="warteschlangenliste";

        //connection to the database
        $con = mysqli_connect($host, $user, $pass, $databasename, 3306);

        //Query Data from Database
        //Tabellenaufbau: ID(10)Auto_inc,Name varchar(20), Password varchar(20), Guthaben int (20)
        $result= mysqli_query( $con, "update $tableName Set Guthaben='$userkontostand' where Name='$username'");
        $result2= mysqli_query($con, "insert into $tableName2 (ID,UserName) VALUES ('$username')");

        //beendet die Verbindung zur Datenbank
        mysqli_close($con);

?>
