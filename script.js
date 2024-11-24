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


// I made a function to apply the preferences from localStorage to the page
function applyPreferences() {
    // This is how we get the preferences from localStorage and apply them to the page
    const name = localStorage.getItem('name');
     // It will retrieve the saved name from localStorage from the page
    const bgColor = localStorage.getItem('bgColor'); 
    // It will retrieve the saved background color from localStorage from the page
    const fgColor = localStorage.getItem('fgColor'); 
    // It will retrieve the saved foreground color from localStorage from the page

    // Apply the saved preferences to the page
    if (name) {
        // It will check if the name is saved in localStorage by calling will getElementById.
        // If the name is saved, it will set the greeting text with the saved name
        document.getElementById('greeting').textContent = `Welcome, ${name}!`; 
    }
    // It will check if the background color is saved in localStorage by calling will getElementById.
    if (bgColor) {
    // If the background color is saved, it will set the background color to the saved color
        document.body.style.backgroundColor = bgColor; 
    }
    // It will check if the foreground color is saved in localStorage by calling will getElementById.
    if (fgColor) {
        // If the foreground color is saved, it will set the foreground color to the saved color
        document.body.style.color = fgColor; // Set the foreground color to the saved color
    }
    // End of the function
}

// Call applyPreferences when the page loads
// This will call the function to apply the preferences from localStorage to the page through the event listener
document.addEventListener('DOMContentLoaded', function() {
    // Apply preferences from localStorage when the page loads
    applyPreferences(); 

    // For the form to save the preferences
    const form = document.getElementById('preferences-form'); 
    // Reference to the form element

    // Event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        const name = document.getElementById('name').value; 
        // It will get the current value of the name input
        const bgColor = document.getElementById('background-color').value; 
        // it will get the current value of the background color input
        const fgColor = document.getElementById('foreground-color').value; 
        // it will get the current value of the foreground color input

        // Save preferences to localStorage
        localStorage.setItem('name', name);
        // It will save the name to localStorage
        localStorage.setItem('bgColor', bgColor);
        // It will save the background color to localStorage
        localStorage.setItem('fgColor', fgColor);
        // It will save the foreground color to localStorage

        // Apply preferences immediately
        applyPreferences();

        // Show notification
        const notification = document.createElement('div'); 
        // It will create a new div element for the notification
        notification.className = 'alert alert-success'; 
        // It will set the class of the notification for styling
        notification.textContent = 'Preferences saved!'; 
        // It will set the text content of the notification
        document.body.appendChild(notification); 
        // It will append the notification to the body

        // Remove notification after 2 second
        // This is a setTimeout function
    
        setTimeout(() => {
            // Once 2 seconds have passed
            document.body.removeChild(notification); 
            // Remove the notification from the body
        }, 2000);
    });
});
