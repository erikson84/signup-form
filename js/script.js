'use strict'

const password1 = document.querySelector("#userPass");
const password2 = document.querySelector("#confirmPass");
const form = document.querySelector('form');    

password1.addEventListener('change', checkPass);
password2.addEventListener('change', checkPass);

form.addEventListener('submit', function(e) {
    if (!password1.validity.value) {
        alert("Passwords do not match!")
        e.preventDefault();
    }
})

function checkPass() {
    console.log('Function activated!')
    if (password1.value != password2.value) {
        password1.classList.add('error');
        password1.validity.value = false;
        password2.classList.add('error');
        password1.validity.value = false;
    } else {
        password1.classList.remove('error');
        password1.validity.value = true;
        password2.classList.remove('error');
        password1.validity.value = true;
    }
}