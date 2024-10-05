// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if user exists in localStorage (simulate registered users)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        document.getElementById('login-result').textContent = "Login successful!";
        document.getElementById('login-result').style.color = "green";
    } else {
        document.getElementById('login-result').textContent = "Invalid credentials!";
        document.getElementById('login-result').style.color = "red";
    }
});

// Clear localStorage when the button is clicked
document.getElementById('clearLocalStorage').addEventListener('click', function() {
    localStorage.clear();
    alert("All data has been reset.");
});


// Navigate to the registration page
document.getElementById('registerButton').addEventListener('click', function() {
    window.location.href = 'registration_form.html'; // Redirect to register.html
});
