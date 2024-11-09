function eliminarElemento(){
    const lista=document.getElementById('lista');
    const hijos=lista.childNodes.length;

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    alert(`Se han elimidado ${hijos} elemtos de la lista`) 
}