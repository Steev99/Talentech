//condicionales
////////////////////////////////////////////////////////
/*let lavarloza=false;
let tarea=true;

if(lavarloza||tarea){
    document.write("puedes ir a la fiesta")
}else{
    document.write("no puedes ir a la fiesta estas castigado");
}*/
///////////////////////////////////////////////////////
/*let nota = 2.9;

if(nota>=3){
    document.write("aprobado");
}else if(nota<3){
    document.write("reprobo");
}*/
///////////////////////////////////////////////////////////
//condicionales en varias 
/*let nota = 2;

if(nota == 5){
    document.write("perfecto");
}else if(nota <5 && nota >=4){
    document.write("sobresaliente");
}else if(nota <4 && nota >=3){
    document.write("bien");
}else{
    document.write("insuficiente");
}*/
let numero1=prompt("Por favor ingrese un numero:");//para pedir datos por teclado la funcion es prompt
let numero2=prompt("Por favor ingrese otro numero:");

if(numero1>numero2){
    alert("El numero mayor es: "+numero1);
}else if(numero1<numero2){
    alert("El numero mayor es: "+numero2);
}else{
    alert("Los numeros son iguales");
}


