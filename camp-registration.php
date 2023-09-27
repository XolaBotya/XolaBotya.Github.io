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
$message = $_POST['message'];
$allergies = $_POST['allergies'];

// Prepare and execute the SQL query to insert data into the database
$sql = "INSERT INTO camp_reg (name, email, phone, message, allergies) VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
if (!$stmt) {
    die("prepare statement failed" . $conn->error);
}

$stmt->bind_param("sssss", $name, $email, $phone, $message, $allergies);

if ($stmt->execute()) {
   
    echo "Registration successful!";
   
} else {
    echo "Error: " . $conn->error;
}

// Close the database connection
$stmt->close();
$conn->close();
?>
