let AccCode = "2520"; // Store the access code as a string to match the input value

document.addEventListener("DOMContentLoaded", function() {
  // Get the button and the text input elements
  const myButton = document.getElementById("myButton");
  const myButton2 = document.getElementById("myButton2");

  // Set the onclick handler for the "Members" button
  myButton.onclick = function() {
    const inputText = document.getElementById("myText").value; // Get the value from the input
    if (inputText === AccCode) {
       
      window.location.href = "members.html";
    } else {
      alert("Access code is incorrect.");
    }
    document.getElementById("myText").value = "";
  };

  // Set the onclick handler for the "Camp Attendees" button
  myButton2.onclick = function() {
    const inputText = document.getElementById("myText").value; // Get the value from the input
    if (inputText === AccCode) {
      window.location.href = "campmembers.html";

    } else {
      alert("Access code is incorrect.");
    }
   
    document.getElementById("myText").value = "";
  };
});

// Open a new window/tab with a specific URL
function openPage(url) {
 
    window.open(url, '_blank');

  
}
