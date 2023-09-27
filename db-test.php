<?php
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

print('connected sucessfluy');
die();
// Prepare and execute the SQL query to insert data into the database
$sql = "INSERT INTO members (name, email, phone, address, kin_contact, birthdate, baptised, local_church, elder_contact) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$baptised = ($baptised == 'yes');
$stmt->bind_param("sssssssss", $name, $email, $phone, $address, $kinContact, $birthdate, $baptised, $localChurch, $elderContact);

if ($stmt->execute()) {
    echo "Membership form submitted successfully!";
} else {
    echo "Error: " . $conn->error;
}