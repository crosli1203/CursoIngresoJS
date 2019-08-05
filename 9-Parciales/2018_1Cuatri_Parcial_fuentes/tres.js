function mostrar() {
    var plata;
    var descuento;
    var total;

    plata = prompt("ingrese precio");
    descuento = prompt("ingrese porcentaje de descuento");
    total = (parseInt(plata) * parseInt(descuento) / 100);

    document.getElementById("elPrecioFinal").value = (parseInt(plata) - parseInt(total));

    //document.getElementById("resultado").value= (parseInt(numero1)-parseInt(numero1)*25/100); 

    //plata = document.getElementById("").value;
}
