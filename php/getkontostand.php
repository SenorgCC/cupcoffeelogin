header("Content-type: application/json; charset=utf-8");
<?php

        //Hier Kommen die Verbindungsdaten für die Datenbank hin!
        $username=$_POST['username'];
        $host = "localhost";
        $user = "root";
        $pass= "";

        //DB Daten

        $databasename="cupcoffedb";
        $tableName= "logindata";

        //connection to the database
        $con = mysqli_connect($host, $user, $pass, $databasename, 3306);

        //Query Data from Database
        //beim where Klausel Name='var' sind die hockomma notwendig! Sonst kommt es zu Uncought Errors!
        $result= mysqli_query( $con, "select Guthaben from $tableName where Name='$username'");

        while($row=mysqli_fetch_array($result)){
            echo $row['Guthaben'];
        }

        //beendet die Verbindung zur Datenbank
        mysqli_close($con);
?>
