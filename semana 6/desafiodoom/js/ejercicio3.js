function creaDiv() {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.style.backgroundColor = "green";
    nuevoDiv.style.color = "white";
    nuevoDiv.style.textAlign = "center";
    nuevoDiv.innerText = "Javascript permite crear páginas dinámicas.";
    document.body.appendChild(nuevoDiv);
    }