// client.js
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const hideIcon = document.getElementById('hide-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        hideIcon.setAttribute('src', 'resources/show.png'); // Replace with your show icon path
    } else {
        passwordInput.type = 'password';
        hideIcon.setAttribute('src', 'resources/hide.png'); // Replace with your hide icon path
    }
}
