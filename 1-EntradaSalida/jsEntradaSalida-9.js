/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var numero1;
    
    numero1=document.getElementById("sueldo").value;
    

    
document.getElementById("resultado").value= (parseInt(numero1)+parseInt(numero1)*10/100); 
       
    
}
