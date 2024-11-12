// This script handles form submission and redirects to result page
document.getElementById('nameForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    if (name) {
        // Redirect to the result page with name as query parameter
        window.location.href = `result.html?name=${encodeURIComponent(name)}`;
    } else {
        alert('Please enter your name.');
    }
});
