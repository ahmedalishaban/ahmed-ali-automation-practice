// Handle registration form submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const dob = document.getElementById('dob').value;
    const maritalStatus = document.getElementById('maritalStatus').value;
    const country = document.getElementById('country').value;
    const countryCode = document.getElementById('countryCode').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Validate that the passwords match
    if (newPassword === confirmPassword) {
        // Get registered users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if username is already taken
        const userExists = users.find(user => user.username === newUsername);

        if (!userExists) {
            // Add the new user to the users array and store it in localStorage
            users.push({
                username: newUsername,
                password: newPassword,
                dob: dob,
                maritalStatus: maritalStatus,
                country: country,
                phone: `${countryCode} ${phone}`,
                address: address
            });
            localStorage.setItem('users', JSON.stringify(users));

            document.getElementById('register-result').textContent = "Registration successful!";
            document.getElementById('register-result').style.color = "green";

            // Redirect to login page after 2 seconds
            setTimeout(function() {
                window.location.href = 'login.html'; // Redirect to the login page
            }, 2000); // Wait for 2 seconds before redirecting
        } else {
            document.getElementById('register-result').textContent = "Username already taken!";
            document.getElementById('register-result').style.color = "red";
        }
    } else {
        document.getElementById('register-result').textContent = "Passwords do not match!";
        document.getElementById('register-result').style.color = "red";
    }
});
