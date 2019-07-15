function mostrar() {
    //tomo la edad  
    var mes = document.getElementById("mes").value;

    //alert (mesDelAño);

    switch (mes) {
        case "Febrero":
            alert("Este mes no tiene mas de 29 dias");
            break;
        case "Enero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
        case "Julio":
        case "Agosto":
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            alert("Este mes tiene mas de 30 dias");

            break;

    }
}//FIN DE LA FUNCIÓN