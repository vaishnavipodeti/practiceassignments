// ==========================
// Task 1: Keyboard Events
// ==========================

// Select the chat input and chat messages list
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");

// Add a keydown event listener
chatInput.addEventListener("keydown", function (e) {

    // Check if Enter key is pressed
    if (e.key === "Enter") {

        // Create a new list item
        const newMessage = document.createElement("li");

        // Set the text to the input value
        newMessage.textContent = chatInput.value;

        // Append it to the chat list
        chatMessages.appendChild(newMessage);

        // Clear the input field
        chatInput.value = "";
    }
});


// ==========================
// Task 2: Timers
// ==========================

// ----- setTimeout -----

const alertBtn = document.getElementById("alert-btn");
const alertMsg = document.getElementById("alert-msg");

alertBtn.addEventListener("click", function () {

    // Show the alert message
    alertMsg.style.display = "block";

    // Hide it after 3 seconds
    setTimeout(function () {
        alertMsg.style.display = "none";
    }, 3000);
});


// ----- setInterval -----

const counterDisplay = document.getElementById("counter-display");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

let counter = 0;
let interval;

startBtn.addEventListener("click", function () {

    interval = setInterval(function () {
        counter++;
        counterDisplay.textContent = counter;
    }, 1000);

});

stopBtn.addEventListener("click", function () {

    clearInterval(interval);

});


// ==========================
// Task 3: Local Storage
// ==========================

// Select elements
const greetingName = document.getElementById("greeting-name");
const nameInput = document.getElementById("name-input");
const saveBtn = document.getElementById("save-btn");

// Load saved name when page opens
const savedName = localStorage.getItem("username");

if (savedName) {
    greetingName.textContent = savedName;
}

// Save name when button is clicked
saveBtn.addEventListener("click", function () {

    localStorage.setItem("username", nameInput.value);

    greetingName.textContent = nameInput.value;

});


// ==========================
// Task 4: Event Delegation
// ==========================

// Select the list
const delegationList = document.getElementById("delegation-list");

// Add one click listener to the parent
delegationList.addEventListener("click", function (e) {

    // Check if an <li> was clicked
    if (e.target.tagName === "LI") {

        // Toggle completed style
        e.target.classList.toggle("completed");

    }

});