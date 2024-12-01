document.addEventListener('DOMContentLoaded', function() {
    const enquiryFormButton = document.getElementById('submitEnquiry');

    enquiryFormButton.addEventListener('click', function(event) {
        event.preventDefault(); /* prevent the form from being submitted on accident or being misused by users */

        /* get the form data */
        const emailInput = document.getElementById('userEmail');
        const email = emailInput.value;
        const message = document.getElementById('userEnquiry').value;

        /*check if the fields have been filled in */
        if (!email || !message) {
            alert('Please fill out both fields.');
            return;
        }

        /* simple email validation */
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        /* display confirmation message */
        if (email && message) {
            alert('Thank you for your enquiry! We will get back to you soon.');
            /* clear the form fields */
            emailInput.value = '';
            document.getElementById('userEnquiry').value = '';
        } else {
            alert('Please fill out both fields.');
        }
    });

    /* purchasing of tickets */
    window.redirectToWebsite = function(url) {
        window.open(url, '_blank');
    };

    function validateEmail(email) {
        /* check for the presence of "@" and "." */
        const atSymbolIndex = email.indexOf('@');
        const dotIndex = email.lastIndexOf('.');

        /* check if "@" is present and followed by "." */
        if (atSymbolIndex > 0 && dotIndex > atSymbolIndex + 1 && dotIndex < email.length - 1) {
            return true;
        }
        return false;
    }
});

