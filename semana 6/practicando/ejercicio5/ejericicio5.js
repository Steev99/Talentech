function agregarElemento(event){
    event.preventDefault();
    const input = document.getElementById('nuevoItem');
    const lista = document.getElementById('elementolista');
    const item = document.createElement('li');
    item.textContent = input.value;
    const enlace = document.createElement('span');
    enlace.textContent = '  Eliminar';
    enlace.className = 'xxx';

    enlace.onclick = () => item.remove();
    item.appendChild(enlace);
    lista.appendChild(item);
    input.value = '';
}