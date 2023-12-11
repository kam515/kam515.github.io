document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var userPassword = document.getElementById('passwordInput').value;
    var correctPassword = 'shorecp'; // Replace with your password

    if (userPassword === correctPassword) {
        document.getElementById('content').style.display = 'block';
        document.getElementById('loginForm').style.display = 'none';
    } else {
        alert('Incorrect password');
    }
});
