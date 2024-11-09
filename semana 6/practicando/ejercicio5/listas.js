function eliminarhijo(){
    const elementoLista = document.getElementById('itemEliminar');
    if(elementoLista){
        elementoLista.parentNode.removeChild(elementoLista);
    }
}