document.getElementById('validationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    // Remove any non-numeric characters from the phone number
    phone = phone.replace(/\D/g, '');

    if (fullName.length < 5) {
        errorMessages.innerHTML += 'Full Name must be at least 5 characters long.<br>';
    }

    if (!email.includes('@')) {
        errorMessages.innerHTML += 'Enter a valid Email address.<br>';
    }

    if (phone === '123456789' || phone.length !== 10) {
        errorMessages.innerHTML += 'Phone Number should be a 10-digit number and should not be 123456789.<br>';
    }

    if (password === 'password' || password === fullName || password.length < 8) {
        errorMessages.innerHTML += 'Password must be at least 8 characters long and should not be "password" or your name.<br>';
    }

    if (password !== confirmPassword) {
        errorMessages.innerHTML += 'Password and Confirm Password do not match.<br>';
    }

    if (errorMessages.innerHTML === '') {
        alert('Form submitted successfully!');
        document.getElementById('validationForm').reset();
    }
}
