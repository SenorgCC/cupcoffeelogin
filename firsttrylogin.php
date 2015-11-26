<?php

        //$usrname=$_POST['username'];
        //$usrpassword=$_POST['userpassword'];
        $host = "localhost";
        $user = "root";
        $pass= "";
        $databasename="cupcoffedb";
        $tableName= "logindata";
        $json=array();
        //connection to the database



        $con = mysqli_connect($host, $user, $pass, $databasename, 3306);

        //Query Data from Database

        $result= mysqli_query( $con, "select ID, Name, Password from $tableName ");

        if (mysqli_num_rows($result) > 0) {
            // output data of each row
            while($row = mysqli_fetch_assoc($result)) {

               $bus= array(
               'id'=> (int)$row['ID'],
               'name'=>$row['Name'],
               'passwort'=>$row['Password']
               );
               array_push($json,$bus);
            }


        }
        $jsonstring= json_encode($json, JSON_UNESCAPED_SLASHES);
        echo $jsonstring;
        mysqli_close($con);

?>
