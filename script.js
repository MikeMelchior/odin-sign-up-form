const pswd = document.getElementById('password');
const pswdc = document.getElementById('confirm-password');

const verifyPassword = (e) => {
    console.log(pswdc.value)
    if (pswd.value !== pswdc.value) {
        pswdc.setCustomValidity('Passwords do not match.')
    } else {
        pswdc.setCustomValidity('')
    }
    };

pswd.addEventListener('change', verifyPassword)
pswdc.addEventListener('keyup', verifyPassword)