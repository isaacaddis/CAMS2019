<?php

$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = "isaacaddis21@gmail.com";
$subject = "Message from CAMS2019.tk";


mail($to, $subject, $message, "From " . $first_name . $last_name);
echo "Your message has been sent";

?>
