document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Do something with the form data, like send it to a server or display it
    console.log("Username: " + username);
    console.log("Email: " + email);
    console.log("Password: " + password);
});
