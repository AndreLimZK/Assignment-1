document.addEventListener('DOMContentLoaded', function() {
    const enquiryFormButton = document.getElementById('submitEnquiry');

    enquiryFormButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Get the form data
        const emailInput = document.getElementById('userEmail');
        const email = emailInput.value;
        const message = document.getElementById('userEnquiry').value;

        // Basic email validation
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Display a confirmation message
        if (email && message) {
            alert('Thank you for your enquiry! We will get back to you soon.');
            // Clear the form fields
            emailInput.value = '';
            document.getElementById('userEnquiry').value = '';
        } else {
            alert('Please fill out both fields.');
        }
    });

    function validateEmail(email) {
        // Check for the presence of "@" and "."
        const atSymbolIndex = email.indexOf('@');
        const dotIndex = email.lastIndexOf('.');

        // Ensure "@" is present and followed by "."
        if (atSymbolIndex > 0 && dotIndex > atSymbolIndex + 1 && dotIndex < email.length - 1) {
            return true;
        }
        return false;
    }
});

