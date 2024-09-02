// script.js
document.getElementById('ajax-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const form = e.target;
    const formData = new FormData(form);

    // Send the form data via AJAX using the Fetch API
    fetch(form.action, {
        method: form.method,
        body: formData,
    })
    .then(response => response.text()) // or .json() if you expect JSON response
    .then(data => {
        // Handle the response
        document.getElementById('response').innerHTML = 'Form submitted successfully!<br>' + data;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('response').innerHTML = 'An error occurred while submitting the form.';
    });
});
