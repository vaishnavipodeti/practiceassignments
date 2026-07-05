// ==========================
// Task 1: Form Handling & Event Objects
// ==========================

// Select the form and the display span
const userForm = document.getElementById("user-form");
const displayName = document.getElementById("display-name");

// Add submit event listener
userForm.addEventListener("submit", function (e) {

    // Prevent page reload
    e.preventDefault();

    // Get the value from the input field
    const username = document.getElementById("username-input").value;

    // Display the entered username
    displayName.textContent = username;

});


// ==========================
// Task 2: Removing Elements (.remove())
// ==========================

// Select all delete buttons
const deleteButtons = document.querySelectorAll(".delete-btn");

// Add click event listener to each button
deleteButtons.forEach(function (button) {

    button.addEventListener("click", function (e) {

        // Select the parent <li>
        const listItem = e.target.parentElement;

        // Remove the <li>
        listItem.remove();

    });

});


// ==========================
// Task 3: DOM Traversal
// ==========================

// Select the container
const containerBox = document.getElementById("container-box");

// Log the number of children
console.log(containerBox.children.length);

// Select the button
const colorParentBtn = document.getElementById("color-parent-btn");

// Add click event listener
colorParentBtn.addEventListener("click", function (e) {

    // Select the parent element
    const parent = e.target.parentElement;

    // Change its background color
    parent.style.backgroundColor = "lightblue";

});