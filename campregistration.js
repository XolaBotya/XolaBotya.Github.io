// Function to create a member card
function createMemberCard(member, index) {
    const card = document.createElement("div");
    card.classList.add("member-card");
    card.innerHTML = `
      <h3>${member.fullName}</h3>
      <p>Email: ${member.email}</p>
      <p>Phone: ${member.phone}</p>
      <p>Expectations: ${member.expectations}</p>
      <p>Allergies: ${member.allergies}</p>
      <button Id="delete-button" data-index="${index}">Delete</button>
    `;
    return card;
}
 //<button class="delete-button" data-index="${index}">Delete</button>
// Function to display members on the campmembers.html page
function displayMembers() {
    const memberList = document.querySelector(".members"); // Update selector
    const storedMembers = JSON.parse(localStorage.getItem("members")) || [];
    if(storedMembers.length > 1)
    {
        document.getElementById("member-count").innerHTML = "Total people registered for the Camp are  " + JSON.parse(localStorage.getItem("members")).length;
    }
    else if (storedMembers.length == 1)
    {
        document.getElementById("member-count").innerHTML = "There is only " + JSON.parse(localStorage.getItem("members")).length  +" person registered for the camnp" ;
    }
    else
    {
        document.getElementById("member-count").innerHTML = "It seems as if no one is going at the moment " + JSON.parse(localStorage.getItem("members")).length; 
    }
    
    //MemberCountElement.textContent = `Total Members: ${storedMembers.length}`;
    // Clear the member list before displaying updated members
    memberList.innerHTML = "";

    storedMembers.forEach((member) => {
        const card = createMemberCard(member);
        memberList.appendChild(card);
    });
}
// Function to handle member deletion
/*
function handleDelete(event) {
    if (event.target.classList.contains("delete-button")) {
        const index = parseInt(event.target.getAttribute("data-index"));
        const storedMembers = JSON.parse(localStorage.getItem("members")) || [];
        
        storedMembers.splice(index, 1); // Remove the member from the array
        localStorage.setItem("members", JSON.stringify(storedMembers)); // Update localStorage
        
        displayMembers(); // Refresh the displayed members
    }
}*/
/*document.getElementById("delete-button").onclick = function handleDelete(event) {
    if (event.target.classList.contains("delete-button")) {
        const index = parseInt(event.target.getAttribute("data-index"));
        const storedMembers = JSON.parse(localStorage.getItem("members")) || [];
        
        storedMembers.splice(index, 1); // Remove the member from the array
        localStorage.setItem("members", JSON.stringify(storedMembers)); // Update localStorage
        
        displayMembers(); // Refresh the displayed members
    }
}*/
/*const memberList = document.querySelector(".members");
memberList.addEventListener('click', handleDelete);*/

// Call the displayMembers function when the campmembers.html page loads
if (window.location.pathname === "/campmembers.html") {
    document.addEventListener("DOMContentLoaded", displayMembers);
  }

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // Get the form values
    const fullName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const expectations = document.getElementById('message').value;
    const allergies = document.getElementById('allergies').value;

    // Create an object to store the member data
    const member = {
        fullName,
        email,
        phone,
        expectations,
        allergies,
    };

    // Get existing members from localStorage
    const storedMembers = JSON.parse(localStorage.getItem("members")) || [];

    // Add the new member to the array
    storedMembers.push(member);

    // Save the updated members array to localStorage
    localStorage.setItem("members", JSON.stringify(storedMembers));

    // Clear the form fields after submission
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
    document.getElementById("allergies").value = "";

    // Refresh the displayed members
    displayMembers();
}

// Add event listener to the form for form submission
const form = document.querySelector("form");
//form.addEventListener("submit", handleSubmit);

