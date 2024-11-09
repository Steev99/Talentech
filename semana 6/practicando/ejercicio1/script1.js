function eliminar(){
    const elemento = document.getElementsByClassName('elimina');
    if(elemento.length > 0){
        elemento[1].remove();
        document.getElementById('mensaje').innerHTML = 'Elemento eliminado';
    }
}