function mostrar()
{
//tomo la edad  

    var edad
    var ecivil

    edad = document.getElementById("edad").value;
    ecivil = document.getElementById("estadoCivil").value;
    
    if(edad <18 && ecivil != "soleto")
    alert("es muy pequeño para NO ser soltero");  
}//FIN DE LA FUNCIÓN