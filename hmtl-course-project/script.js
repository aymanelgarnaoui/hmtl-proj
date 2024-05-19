document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            alert('Logged in successfully!');
window.location.href = "index.html";



        });
    }
});
