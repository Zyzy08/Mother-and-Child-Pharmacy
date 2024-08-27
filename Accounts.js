// script.js

// Get references to the elements
const addUserBtn = document.getElementById('addUser');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

// Function to show the overlay
function showOverlay() {
  overlay.style.display = 'flex';
}

// Function to hide the overlay
function hideOverlay() {
  overlay.style.display = 'none';
}

// Add event listeners
addUserBtn.addEventListener('click', showOverlay);
closeBtn.addEventListener('click', hideOverlay);

// Optional: Hide overlay if clicking outside the form container
overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    hideOverlay();
  }
});

// Get references to the input and image elements
const fileInput = document.getElementById('profilePicture');
const previewImg = document.getElementById('preview');

// Function to handle file selection and image preview
fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
        const reader = new FileReader(); // Create a FileReader object

        // Set up the FileReader to read the file as a data URL
        reader.onload = function(e) {
            previewImg.src = e.target.result; // Set the image source to the data URL
            previewImg.style.display = 'block'; // Show the image preview
        };

        // Read the file as a data URL
        reader.readAsDataURL(file);
    } else {
        previewImg.src = '';
        previewImg.style.display = 'none'; // Hide the image preview if no file is selected
    }
});

// Get reference to the form element
const form = document.getElementById('userForm');

// Function to clear the image preview when the form is reset
form.addEventListener('reset', function() {
    previewImg.src = ''; // Clear the image source
    previewImg.style.display = 'none'; // Hide the image preview
    fileInput.value = ''; // Clear the file input value
});