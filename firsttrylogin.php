<?php

    $host = "localhost:3306";
    $user = "root";
    $pass= "";
    $databasename="cupcoffedb";
    $tableName= "logindata";

//connection to the database

$con = mysqli_connect($host, $user, $pass);

$dbs = mysqli_select_db($con,$databasename);

//Query Data from Database

$result= mysqli_query($con, "Select name From $tableName where name=$usrname and p");
$array = mysqli_fetch_row($result);
//echo
echo json_encode($array);


?>
