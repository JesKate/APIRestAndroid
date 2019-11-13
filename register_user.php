<?php
    include('connectionDB.php');
    /*llega del frontend(email)*/
	$Firstname= $_POST['firstname'];
	$Lastname= $_POST['lastname'];
	$Phone= $_POST['phone'];
	$Email = $_POST['email'];

    $sql = "INSERT INTO users (firstname,lastname,phone,email) 
	VALUES ('$Firstname','$Lastname','$Phone','$Email')";

    if ($conn->query($sql) === TRUE){
        echo "User has been created";
    }else{
        echo "Error: ". $sql . " " . $conn->error;
    }

    $conn->close();
?>