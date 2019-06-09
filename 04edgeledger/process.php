<?php
if(isset($_POST['email'])){
    $admin_email = "example@example.net";
    $name = $_POST['name'];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    // send email
    mail($admin_email,"New Inquiry",$message." - ".$phone,"From:".$email);
    header("Location: http://localhost/edgeledger.net/success.html");
    die();
}
?>