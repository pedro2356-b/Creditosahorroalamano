function moveToNext(currentInput) {
    let currentPin = document.getElementById(`pin${currentInput}`);
    if (currentPin.value.length === 1 && currentInput < 4) {
        document.getElementById(`pin${currentInput + 1}`).focus();
    }
    validatePin();
}

function validatePin() {
    let pin1 = document.getElementById("pin1").value;
    let pin2 = document.getElementById("pin2").value;
    let pin3 = document.getElementById("pin3").value;
    let pin4 = document.getElementById("pin4").value;
    let loginBtn = document.getElementById("continuarBtn");

    if (pin1 && pin2 && pin3 && pin4) {
        loginBtn.disabled = false;
        loginBtn.classList.add("active");
    } else {
        loginBtn.disabled = true;
        loginBtn.classList.remove("active");
    }
}




document.getElementById('continuarBtn').addEventListener('click', function() {
submitForm(); // Llamar a la función al hacer clic en el botón
});
 


