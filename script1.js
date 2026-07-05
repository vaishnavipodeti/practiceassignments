


// =====================
// Task 1: Select & Read
// =====================

// a)
const heading = document.getElementById("main-heading");
console.log(heading.textContent);

// b)
const subText = document.getElementById("sub-text");
console.log(subText.textContent);

// c)
const listItems = document.querySelectorAll("#color-list li");
console.log(listItems.length);


// =====================
// Task 2: Change Text
// =====================

// a)
const message = document.getElementById("message");
message.textContent = "Hello from JavaScript!";

// b)
const info = document.getElementById("info");
info.textContent = "This information has been updated.";


// =====================
// Task 3: Change Colors & Styles
// =====================

// a)
const colorBox = document.getElementById("color-box");
colorBox.style.color = "blue";

// b)
const highlight = document.getElementById("highlight");
highlight.style.backgroundColor = "yellow";

// c)
const textSize = document.getElementById("text-size");
textSize.style.fontSize = "24px";
textSize.style.color = "red";