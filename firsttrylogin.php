<?php

        $usrname=$_POST['username'];
        $usrpassword=$_POST['userpassword'];
        $host = "localhost:3306";
        $user = "root";
        $pass= "";
        $databasename="cupcoffedb";
        $tableName= "logindata";
        //connection to the database



        $con = mysqli_connect($host, $user, $pass);

        $dbs = mysqli_select_db($con,$databasename);

        //Query Data from Database

        $result= mysqli_query($con, "Select Name From $tableName where Name=$usrname");

        //echo
        //echo json_encode($result);

?>
