function mostrar() {
    //tomo la edad  
    var mes = document.getElementById("mes").value;

    //alert (mesDelAño);

    switch (mes) {
        case "Febrero":
            alert("Si tiene 28 dias");
            break;


        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":

            alert("Si tiene 30");

            break;


        default:
            alert("Si tiene 31");

            break;


    }
}//FIN DE LA FUNCIÓN