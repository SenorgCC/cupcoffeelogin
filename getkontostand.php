<?php

        //Hier Kommen die Verbindungsdaten für die Datenbank hin!
        $username=$_GET['username'];
        $host = "localhost";
        $user = "root";
        $pass= "";

        //DB Daten

        $databasename="cupcoffedb";
        $tableName= "logindata";

        //Rückgabestring für den Controller
        $json=array();

        //connection to the database
        $con = mysqli_connect($host, $user, $pass, $databasename, 3306);

        //Query Data from Database
        $result= mysqli_query( $con, "select Guthaben from $tableName where Name=$username ");

        //Jede Einzelne Zeile muss einzeln eingelesen und Gespeichert werden, da sonst "false"
        //zurückgegeben wird
        if (mysqli_num_rows($result) > 0) {
            // output data of each row
            while($row = mysqli_fetch_assoc($result)) {

               $bus= array(
               'Guthaben'=> $row['Guthaben']
               );
               array_push($json,$bus);
            }


        }

        //Da Wir ein Objectarray benötigen muss das Datenarray erst ins JSON format umgewandelt werden
        $jsonstring= json_encode(array_values($json));

        //Rückgabe der Daten
        echo $jsonstring;

        //beendet die Verbindung zur Datenbank
        mysqli_close($con);

?>
