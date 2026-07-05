// ==========================
// Task 1: Event Listeners & Class Manipulation
// ==========================

// Select the theme button and the body
const themeBtn = document.getElementById("theme-btn");
const body = document.body;

// Toggle the dark-mode class when the button is clicked
themeBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
});

// Select the hover box
const hoverBox = document.getElementById("hover-box");

// Add the highlight class when the mouse enters
hoverBox.addEventListener("mouseenter", function () {
    hoverBox.classList.add("highlight");
});

// Remove the highlight class when the mouse leaves
hoverBox.addEventListener("mouseleave", function () {
    hoverBox.classList.remove("highlight");
});


// ==========================
// Task 2: Modifying Attributes
// ==========================

// Select the swap button and profile image
const swapBtn = document.getElementById("swap-btn");
const profilePic = document.getElementById("profile-pic");

// Change the image when the button is clicked
swapBtn.addEventListener("click", function () {
    profilePic.src = "https://via.placeholder.com/150/0000FF/808080?Text=New+Image";
    profilePic.alt = "New Profile Image";
});

// Select the disable button
const disableBtn = document.getElementById("disable-btn");

// Disable the button after it is clicked
disableBtn.addEventListener("click", function () {
    disableBtn.disabled = true;
});


// ==========================
// Task 3: Creating and Appending Elements
// ==========================

// Select the list and the add-item button
const itemList = document.getElementById("item-list");
const addItemBtn = document.getElementById("add-item-btn");

// Add a new list item when the button is clicked
addItemBtn.addEventListener("click", function () {

    // Create a new <li> element
    const newItem = document.createElement("li");

    // Set its text
    newItem.textContent = "New dynamically added item";

    // Append it to the list
    itemList.appendChild(newItem);

});