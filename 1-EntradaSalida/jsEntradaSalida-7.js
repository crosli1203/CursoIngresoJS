/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numero1;
    var numero2;
    
    numero1=document.getElementById("numeroUno").value;
  
    numero2=document.getElementById("numeroDos").value;

      alert("La suma es: "+ (parseInt(numero1)+parseInt(numero2)));
}

function restar()
{
    var numero1;
    var numero2;
    
    numero1=document.getElementById("numeroUno").value;
  
    numero2=document.getElementById("numeroDos").value;

      alert("La resta es: "+ (parseInt(numero1)-parseInt(numero2)));
}

function multiplicar()
{ 
    var numero1;
    var numero2;
    
    numero1=document.getElementById("numeroUno").value;
  
    numero2=document.getElementById("numeroDos").value;

      alert("La multiplicacion es: "+ (parseInt(numero1)*parseInt(numero2)));
}

function dividir()
{
	
    var numero1;
    var numero2;
    
    numero1=document.getElementById("numeroUno").value;
  
    numero2=document.getElementById("numeroDos").value;

      alert("La divicion es: "+ (parseInt(numero1)/parseInt(numero2)));
    }
