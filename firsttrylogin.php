<?php
function login($loginusername, $loginuserpassword){
    $hostname = "localhost";
    $username = "root";
    $password = "";

//connection to the database
$dbhandle = mysql_connect($hostname, $username, $password)
 or die("Unable to connect to MySQL");


//select a database to work with
    $selected = mysql_select_db("cupcoffedb")
        or die("Could not select examples");

    //execute the SQL query and return records
    $result = mysql_query("SELECT Name, Password FROM logindata where Name='$loginusername'");

    //fetch tha data from the database
    while ($row = mysql_fetch_array($result)) {
        echo "ID:".$row{'ID'}." Name:".$row{'Name'};
    }
    //close the connection
    mysql_close($dbhandle);
}
?>
