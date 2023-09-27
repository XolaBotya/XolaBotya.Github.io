// Function to create a member card
function createMemberCard(member) {
    const card = document.createElement("div");
    card.classList.add("member-card");
    card.innerHTML = `
      <h3>${member.name}</h3>
      <p>Email: ${member.email}</p>
      <p>Phone: ${member.phone}</p>
      <p>Address: ${member.expectations}</p>
      <p>Next of Kin Contact: ${member.allergies}</p>
    `;
    return card;
  }
  
  
  // Function to display members on the members.html page
  function displayMembers() {
    const memberList = document.getElementById("member-list");
    const storedMembers = JSON.parse(localStorage.getItem("members")) || [];
  
    // Clear the member list before displaying updated members
    memberList.innerHTML = "";
  
    storedMembers.forEach((member) => {
      const card = createMemberCard(member);
      memberList.appendChild(card);
    });
  }
  
  // Call the displayMembers function when the members.html page loads
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
  
   
  
    // Redirect to the members.html page after form submission
    window.location.href = "campmembers.html";
  }
  
  // Add event listener to the form for form submission
  const form = document.querySelector("form");
  //form.addEventListener("submit", handleSubmit);
  