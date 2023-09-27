// Function to create a member card
function createMemberCard(member) {
    const card = document.createElement("div");
    card.classList.add("member-card");
    card.innerHTML = `
      <h3>${member.name}</h3>
      <p>Email: ${member.email}</p>
      <p>Phone: ${member.phone}</p>
      <p>Address: ${member.address}</p>
      <p>Next of Kin Contact: ${member.kinContact}</p>
      <p>Date of Birth: ${member.birthdate}</p>
      <p>Are you Baptized? ${member.baptised}</p>
      <p>Local Church Name: ${member.localChurch}</p>
      <p>Local Elder's Contact: ${member.elderContact}</p>
     
    `;
    return card;
  }
  
 
  // Function to display members on the members.html page
  function displayMembers() {
    const memberList = document.getElementById("member-list");
   // const storedMembers = JSON.parse(localStorage.getItem("members")) || [];
  
    // Clear the member list before displaying updated members
    memberList.innerHTML = "";
  
    storedMembers.forEach((member) => {
      const card = createMemberCard(member);
      memberList.appendChild(card);
    });
  }
  
  // Call the displayMembers function when the members.html page loads
  if (window.location.pathname === "/members.html") {
    document.addEventListener("DOMContentLoaded", displayMembers);
  }
  
  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
  
    // Get the form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const kinContact = document.getElementById("kin-contact").value;
    const birthdate = document.getElementById("birthdate").value;
    const baptised = document.getElementById("baptised").value;
    const localChurch = document.getElementById("local-church").value;
    const elderContact = document.getElementById("elder-contact").value;
  
    // Create an object to store the member data
    const member = {
      name,
      email,
      phone,
      address,
      kinContact,
      birthdate,
      baptised,
      localChurch,
      elderContact,
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
    document.getElementById("address").value = "";
    document.getElementById("kin-contact").value = "";
    document.getElementById("birthdate").value = "";
    document.getElementById("baptised").value = "";
    document.getElementById("local-church").value = "";
    document.getElementById("elder-contact").value = "";
  
    // Redirect to the members.html page after form submission
   // window.location.href = "members.html";
  }
  
  // Add event listener to the form for form submission
  const form = document.querySelector("form");
  //form.addEventListener("submit", handleSubmit);
  