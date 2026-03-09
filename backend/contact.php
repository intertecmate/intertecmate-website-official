<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$service = $_POST['service'];
$message = $_POST['message'];

$to = "intertecmate@gmail.com";
$subject = "New Website Lead - Intertechmate";

$body = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Service: $service\n\n";
$body .= "Message:\n$message";

$headers = "From: $email";

mail($to, $subject, $body, $headers);

echo "Thank you! We will contact you shortly.";
}
?>
