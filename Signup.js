function signup() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Validation to ensure passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match! Please try again.");
        return;
    }

    // Check if terms and conditions are agreed
    const termsAccepted = document.getElementById("terms").checked;
    if (!termsAccepted) {
        alert("You must agree to the Terms and Conditions to continue.");
        return;
    }

    // Successful registration
    alert("Successful Registered Account!");

    // Redirect to home.html after registration
    window.location.href = "login.html";
}
