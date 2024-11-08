function cambiarcolorEsp(indice){
    const cajas=document.querySelectorAll('.caja');
    cajas[indice].style.backgroundColor=colorAleatorio();
}
function colorAleatorio(){ 
    const letras ='0123456789ABCDEF'
    let color='#';
    for(let i=0; i<6; i++){
        color+=letras[Math.floor(Math.random()*16)];
    }
    return color;
} 
function cambiatodos(){
    const cajas=document.querySelectorAll('.caja');
    cajas.forEach(caja => caja.style.backgroundColor=colorAleatorio());
}
function resetear(){
    const cajas=document.querySelectorAll('.caja');
    cajas.forEach(caja => caja.style.backgroundColor='');
    cajas.forEach(caja => caja.style.border='');
    cajas.forEach(caja => caja.style.borderRadius='');
    cajas.forEach(caja => caja.style.width='');
    cajas.forEach(caja => caja.style.height='');
    cajas.forEach(caja => caja.textContent='Haz click aquí');
}
function cambiarBorde(){
    const cajas=document.querySelectorAll('.caja');
    cajas.forEach(caja => caja.style.border='3px solid green');
}
function cambiarRadio(){
    const cajas=document.querySelectorAll('.caja');
    cajas.forEach(caja => caja.style.borderRadius='50%');
}
function cambiarTamano(){
    const cajas=document.querySelectorAll('.caja');
    cajas.forEach(caja => caja.style.width='200px');
    cajas.forEach(caja => caja.style.height='200px');
}
function cambiarcolor(elemento){
    elemento.style.backgroundColor=colorAleatorio();
    elemento.textContent='Cambiado';
}
