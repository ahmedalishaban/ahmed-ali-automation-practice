document.getElementById("checkoutForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const fullName = document.getElementById("fullName").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const postalCode = document.getElementById("postalCode").value;
    const country = document.getElementById("country").value;
    const paymentMethod = document.getElementById("paymentMethod").value;

    // Show a confirmation message
    alert(`Thank you, ${fullName}! Your purchase has been completed.\nPayment Method: ${paymentMethod}`);
    
    // Optionally, you can clear the form after submission
    document.getElementById("checkoutForm").reset();
});
