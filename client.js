function togglePassword() {
    const passwordField = document.getElementById('password');
    const toggleIcon = document.getElementById('toggle-password');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.textContent = '🙈'; // Change icon to 'hide'
    } else {
        passwordField.type = 'password';
        toggleIcon.textContent = '👁️'; // Change icon to 'show'
    }
}

function signIn() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill in both fields');
        return;
    }

    // Example of handling sign-in logic (replace with your actual logic)
    if (username === 'test' && password === 'password') {
        alert('Sign in successful');
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        alert('Invalid username or password');
    }
}
