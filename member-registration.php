<?php
// Database connection parameters
$hostname = "localhost";
$username = "newfigiq_Newfields";
$password = "Niki@2019";
$database = "newfigiq_NewFields";
// Create a database connection
$conn = new mysqli($hostname, $username, $password, $database);

// Check if the connection was successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$kinContact = $_POST['kin-contact'];
$birthdate = $_POST['birthdate'];
$baptised = $_POST['baptised'];
$localChurch = $_POST['local-church'];
$elderContact = $_POST['elder-contact'];

// Prepare and execute the SQL query to insert data into the database
$sql = "INSERT INTO members (name, email, phone, address, kin_contact, birthdate, baptised, local_church, elder_contact) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$baptised = ($baptised == 'yes');
$stmt->bind_param("sssssssss", $name, $email, $phone, $address, $kinContact, $birthdate, $baptised, $localChurch, $elderContact);

if ($stmt->execute()) {
    header("Location: /index.html");
    echo "Membership form submitted successfully!";

exit;
} else {
    echo "Error: " . $conn->error;
}

// Close the database connection
$stmt->close();
$conn->close();
?>
