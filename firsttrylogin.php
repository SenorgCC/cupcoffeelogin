<?php

    $host = "localhost:3306";
    $user = "root";
    $pass= "";
    $databasename="cupcoffedb";
    $tableName= "logindata";

//connection to the database
include 'DB.php';
$con = mysql_connect($host, $user, $pass);
$dbs = mysql_select($databasename, $con);

//Query Data from Database

$result= mysql_query("Select * From $tableName);
$array = mysql_fetch_row($result);

//echo
echo json_encode($array);


?>
