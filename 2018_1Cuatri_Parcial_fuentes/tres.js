function mostrar()
{var precio;
    var descuento;
    var total;
    precio=parseInt(prompt("Ingrese el precio"));
    descuento=parseInt(prompt("Ingrese el porcentaje de descuento :"));
    total=(precio - (precio*descuento/100));
    document.getElementById("elPrecioFinal").value=total;


}
