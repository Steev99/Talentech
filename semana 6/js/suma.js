function numero(resultado) {
    document.getElementById('entrada').value += resultado;
}

function borrar() {
    document.getElementById('entrada').value = '';
}
function igual() {
    const entrada = document.getElementById("entrada");
    try {
        // evalúa la expresión matemática
        entrada.value = eval(entrada.value);
    } catch (error) {
        entrada.value = "Error";
    }
}