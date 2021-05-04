<?php

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With");

    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $msg = $data->message;

    //form data submitted
    $first_name = $data-> firstname;
    $last_name = $data-> lastname;
    $email = $data->email;
    $phone = $data->phonenumber;
    $city = $data->city;
    $message = $data->message;
    $file =$data->file;
    $IP = $_SERVER['REMOTE_ADDR'];
    $subject = "Kox Staffing Contact us Form";
    $to = "info@koxstaffing.com";

    $headers = "From: koxstaffing";

    // Create connection
    $conn = mysqli_connect("db.koxstaffing.com", "mysql_user", "#mysql.user.1", "contact_us");

    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }

    //insert data to  db
    $insert_query = "INSERT INTO  Inquiry VALUES('','$first_name', '$last_name', '$email', '$phone' ,'$city', '$message', '$IP')";
    if ($conn->query($insert_query) === TRUE) {
        
    $msg = "First Name ".$first_name ."\n Last Name " . $last_name ."\n Email " . $email ."\n Message " . $message . "\n IP address ".$IP;
    
        // send email
       mail($to,$subject, $msg, $headers , $file);
       echo "New record created successfully,";
       header("Location: https://www.koxstaffing.com"); 
       exit();
      } else {
        echo "Error: " . $insert_query . "<br>" . $conn->error;
      }
      
      $conn->close();
   
?>