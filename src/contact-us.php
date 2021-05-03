<?php

// $ref = $_SERVER['HTTP_REFERER'];
// if($ref !== 'koxstaffing.com/')
// {
//     die("Access Denied! please fill form in  main page");
// }
  
    //form data submitted
    $first_name = $POST["f_name"];
    $last_name = $POST["l_name"];
    $email = $POST["email"];
    $phone = $POST["phone"];
    $message = $POST["message"];
    $subject = "Kox Staffing Contact us Form";
    $to = "austinegwa64@gmail.com";

    // Create connection
    $conn = mysqli_connect("db.koxstaffing.com", "mysql_user", "#mysql.user.1", "contact_us");

    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }

    //insert data to  db
    $insert_query = "INSERT INTO  Inquiry VALUES('','$first_name', '$last_name', '$email', '$phone' , '$message')";
    if ($conn->query($insert_query) === TRUE) {
        
    $msg = "First Name ".$first_name ."\n Last Name " . $last_name ."\n Email " . $email ."\n Message " . $message;
    
        // send email
       mail($to,$subject, $msg);
       echo "New record created successfully,";
       header("Location: https://www.koxstaffing.com"); 
       exit();
      } else {
        echo "Error: " . $insert_query . "<br>" . $conn->error;
      }
      
      $conn->close();


  
?>