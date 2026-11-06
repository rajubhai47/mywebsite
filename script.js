
// Welcome message in browser console
console.log("Welcome to Digital Findr!");

// Highlight navigation links when clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        console.log("Navigating to: " + this.textContent);
    });
});

// Button interaction
document.querySelectorAll('.primary-btn').forEach(button => {
    button.addEventListener('click', function() {
        console.log("Digital Findr website button clicked!");
    });
});
