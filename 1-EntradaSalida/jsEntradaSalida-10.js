/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var numero1;
    
    numero1=document.getElementById("importe").value;
    

    document.getElementById("resultado").value= (parseInt(numero1)-parseInt(numero1)*25/100); 
}
