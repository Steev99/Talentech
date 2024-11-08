function displey(valor) {
    document.getElementById('entrada').value += valor;
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