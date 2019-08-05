function mostrar() {



    var sexo = prompt("ingrese f ó m .");

    while (sexo != "f" && sexo != "m") {
        sexo = prompt("error vuelva a escribir");

    }
    if (sexo == "f") {
        sexo = ("femenino");


    }
    if (sexo == "m") {
        sexo = ("masculino");
    }


    document.getElementById('Sexo').value = sexo;



}

//document.getElementById('Sexo').value=sexo;

//FIN DE LA FUNCIÓN