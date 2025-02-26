<?php

// Check if the form has been submitted
if (isset($_POST['sendBtn'])) {

    $today = date( 'Y-m-d' ); // Get today's date
    
    // Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Send the email
    $to = "hello@navilindo.com";
    $to1 = 'dygytator@gmail.com';
    $to2 = "altgroupafrica@gmail.com";

    $subject = 'New message from contact form' . $name . ' on ' . $today;
    $body = "You have received a new message from the user $name.\n\nHere is the message:\n$message";

    mail($to, $subject, $body);
    mail($to1, $subject, $body);
    mail($to2, $subject, $body);

    // Redirect the user to a confirmation page
    //header('Location: contact-form-confirmation.php');
    header('Location: ./home.html');
}
?>