// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.
// Function to apply preferences from localStorage
function applyPreferences() {
    const name = localStorage.getItem('name');
    const bgColor = localStorage.getItem('bgColor');
    const fgColor = localStorage.getItem('fgColor');

    if (name) {
        document.getElementById('greeting').textContent = `Welcome, ${name}!`;
    }
    if (bgColor) {
        document.body.style.backgroundColor = bgColor;
    }
    if (fgColor) {
        document.body.style.color = fgColor;
    }
}

// Call applyPreferences when the page loads
document.addEventListener('DOMContentLoaded', function() {
    applyPreferences();

    const form = document.getElementById('customizeForm');

    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        const name = document.getElementById('nameInput').value;
        const bgColor = document.getElementById('bgColorInput').value;
        const fgColor = document.getElementById('fgColorInput').value;

        // Save preferences to localStorage
        localStorage.setItem('name', name);
        localStorage.setItem('bgColor', bgColor);
        localStorage.setItem('fgColor', fgColor);

        // Apply preferences immediately
        applyPreferences();

        // Show notification
        const notification = document.getElementById('notification');
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 2000);
    });
});