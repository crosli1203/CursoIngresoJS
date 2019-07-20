function mostrar() {
    //tomo la edad  
    var mes = document.getElementById("mes").value;

    //alert (mesDelAño);

    switch (mes) {
        case "Febrero":
            alert("Este mes no tiene mas de 29 dias");
            break;
        default:
            alert("Este mes tiene mas de 30 dias");

            break;

    }
}//FIN DE LA FUNCIÓN