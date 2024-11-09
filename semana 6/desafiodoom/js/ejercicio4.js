let imagenes = document.querySelectorAll(".imagen");
        
        imagenes.forEach((imagen, index) => {
            imagen.addEventListener("click", () => {
                let figcaption = imagen.nextElementSibling;
                figcaption.innerText = `Texto modificado de la imagen ${index + 1}`;
            });
        });