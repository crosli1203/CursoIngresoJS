function mostrar()
{var marca;
    var peso;
    var temperatura;
    var respuesta;
    var temperaturasPares=0;
    var contador=0;
    var marcaMaxima;
    var contadorTemp=0;
    var productosMenores;
    var acumulador=0;
    var contadorProductos=0; 
    var pesoMaximo;
    var pesoMinimo;


    respuesta="si";

    while(respuesta=="si")
    {
        marca=prompt("ingrese una marca");
        peso=prompt("ingrese un peso");
        peso=parseInt(peso);
        while( isNaN(peso) || peso<1 || peso>100)    
        {
            peso=prompt("error, ingrese peso válido");
        }
        temperatura=prompt("ingrese temperatura");
        temperatura=parseInt(temperatura);
        while(isNaN(temperatura) || temperatura<-30 || temperatura>30 )
        {
            temperatura=prompt("error, ingrese temperatura válida");    
        }
        if(temperatura%2 == 0)
        {
            temperaturasPares++;
        }
        contador++;
        if(contador==1)
        {
            pesoMaximo=peso;
            pesoMinimo=peso;
            marcaMaxima=marca;
        }
        else if(pesoMaximo<peso)
        {
            pesoMaximo=peso;
            marcaMaxima=marca;
        }
        else if(pesoMinimo>peso)
        {
            pesoMinimo=peso;
        }

        /*contador++;
        if(contador==1)
        {
            marcaPesada=marca;   
        }
        else if(marcaPesada<marca)
        {
            marcaPesada=marca;
        }*/
        if(temperatura<0)
        {
            productosMenores=marca;
            contadorTemp++;
        }

        contadorProductos++;
        acumulador=acumulador+peso;



        respuesta=prompt("ingrese si, para continuar");
    }

promediototal=acumulador/contadorProductos;

document.write("La cantidad de temperaturas pares son: " + temperaturasPares +"<br>" );
document.write("la marca del producto mas pesado es: " + marcaMaxima + "<br>" );
document.write("La cantidad de productos que se conservan a menos de 0 grados son: " + contadorTemp + "<br>" );
document.write("el promedio del peso de todos los productos es: " + promediototal + "<br>");
document.write("el peso maximo es: " + pesoMaximo + " y el peso minimo es: " + pesoMinimo + "<br>");

}
