<?php

    //Hier Kommen die Verbindungsdaten für die Datenbank hin!
$host = "localhost";
$user = "root";
$pass= "";

//DB Daten

$databasename="cupcoffedb";
$tableName= "warteschlangenliste";

//connection to the database
$con = mysqli_connect($host, $user, $pass, $databasename, 3306);

//Query Data from Database
//beim where Klausel Name='var' sind die hockomma notwendig! Sonst kommt es zu Uncought Errors!
$result= mysqli_query( $con, "select (ID) from $tableName where ID=(Select MAX(ID) from $tableName) ");

while($row=mysqli_fetch_array($result)){
    echo $row['ID'];
}

//beendet die Verbindung zur Datenbank
mysqli_close($con);
?>
