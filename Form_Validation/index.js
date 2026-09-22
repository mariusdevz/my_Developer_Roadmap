const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const confirmEl = document.getElementById('confirm');
const btn = document.getElementById('btn');
const form = document.querySelector('form')

const errorName = document.getElementById('errName');
const errorEmail = document.getElementById('errEmail');
const errorPassword = document.getElementById('errPassword');
const errorConfirm = document.getElementById('errConfirm')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = nameEl.value.trim();
    const emailInput = emailEl.value.trim();
    const passwordInput = passwordEl.value;
    const confirmInput = confirmEl.value;
    let isValid = true;



    // ----------- NAME VALIDATION ------------
    if (nameInput === "") {
        errorName.textContent = 'Enter username';
        errorName.classList.add('error');
        nameEl.classList.add('line')
        isValid = false
    } else if (nameInput.length < 8) {
        errorName.classList.add('error');
        errorName.textContent = 'Name must be atleast 8 letters long.'
        nameEl.classList.add('line')
        isValid = false
    } else {
        errorName.textContent = '✅ success'
        errorName.classList.remove('error')
        errorName.classList.add('success');
        nameEl.classList.remove('line');
        nameEl.classList.add('s-line');
    }

    // -------------- EMAIL VALIDATION -------------
    if (emailInput === '') {
        errorEmail.textContent = 'Enter an email address';
        errorEmail.classList.add('error')
        emailEl.classList.add('line');
        isValid = false;
    } else if (!emailInput.includes('@')) {
        errorEmail.textContent = 'Enter valid email';
        errorEmail.classList.add('error')
        emailEl.classList.add('line')
        isValid = false;
    } else {
        errorEmail.textContent = "✅ success";
        errorEmail.classList.remove('error');
        errorEmail.classList.add('success');
        emailEl.classList.remove('line');
        emailEl.classList.add('s-line')
    }

    // ------------ PASSWORD VALIDATION -----------
    if (passwordInput === '') {
        errorPassword.textContent = 'Enter a password';
        errorPassword.classList.add('error');
        passwordEl.classList.add('line');
        isValid = false;
    } else if (passwordInput.length < 8) {
        errorPassword.textContent = "Password too short.";
        errorPassword.classList.add('error');
        passwordEl.classList.add('line');
        isValid = false;
    } else {
        errorPassword.textContent = "✅ success";
        errorPassword.classList.remove('error');
        errorPassword.classList.add('success');
        passwordEl.classList.remove('line');
        passwordEl.classList.add('s-line');
    }

    // --------------- CONFIRM VALIDATION -----------
    if (confirmInput === '' || confirmInput !== passwordInput) {
        errorConfirm.textContent = "Passwords don't match!"
        errorConfirm.classList.add('error');
        isValid = false;
    } else {
        errorConfirm.textContent = '✅ success';
        errorConfirm.classList.remove('error');
        errorConfirm.classList.add('success');
        confirmEl.classList.remove('line');
        confirmEl.classList.add('s-line');
    }

    if (isValid) {
        console.log("Submitted");

    } else {
        console.log("Error: Form is invalid ");

    }
})

// ALL GOOD

