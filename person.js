document.getElementById('personalForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    var form = e.target;
    var inputs = form.querySelectorAll('input');
    var isValid = true;

    // Check if all fields are filled
    inputs.forEach(function (input) {
        if (input.value.trim() === '') {
            isValid = false;
        }
    });

    var warningMessage = document.getElementById('warningMessage');
    if (!isValid) {
        warningMessage.style.display = 'block';
    } else {
        warningMessage.style.display = 'none';
        // Handle form submission, e.g., send data to server
        alert('Form submitted successfully!');
        form.reset(); // Reset the form after successful submission
    }
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('personalForm');
        const warningMessage = document.getElementById('warningMessage');
    
        form.addEventListener('submit', function (event) {
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const age = parseInt(document.getElementById('age').value, 10);
            const place = document.getElementById('place').value.trim();
    
            // Reset warning message
            warningMessage.style.display = 'none';
    
            // Check if all fields are filled and age is greater than 0
            if (!firstName || !lastName || !email || !phone || !place || isNaN(age) || age <= 0) {
                warningMessage.style.display = 'block';
                event.preventDefault(); // Prevent form submission
            }
        });
    });
    
});
