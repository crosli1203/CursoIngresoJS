function mostrar()
{

    var letra;
    var numero;
    var respuesta;
    var numPares=0;
    var numImpares=0;
    var Ceros=0;
    var numPositivos=0;
    var contadorPositivos=0;
    var contadorNegativos=0;
    var numNegativos=0;
    var minimo=0;
    var maximo=0;
    var letraMaxima;
    var letraMinima;
    var contador=0;
    var promedio=0;


    respuesta = "si";
  
    
    while (respuesta =="si")
    {   
        
        letra = prompt("Ingrese una letra");
        numero = prompt("Ingrese un número");
        numero = parseInt(numero);
        while (numero<-100 || numero>100)
        {
            numero = prompt("Ingrese un número válido");
        }

        if (numero % 2 == 0)
        {
            numPares++;
        }
        else
        {
            numImpares++;
        }

        if (numero == 0)
        {
            Ceros++;
        }

        else if (numero>0)
        {
            numPositivos = numPositivos+numero;
            contadorPositivos++;
        }

        else 
        {
            numNegativos = numNegativos+numero;
            contadorNegativos++;
        }

        contador++;

        if(contador==1)
        {
            maximo=numero;
            letraMaxima=letra;
            minimo=numero;
            letraMinima=letra;
        }
        else if(maximo<numero)
        {
            maximo=numero;
            letraMaxima=letra;
        }
        else if(minimo>numero)
        {
            minimo=numero;
            letraMinima=letra;
        }

      
        /*if (i==0 || numero>maximo)
        {
            maximo = numero;
            letraMaxima = letra;
            
        }
        if (i==0 || numero<minimo )
        {
            minimo = numero;
            letraMinima = letra;
            
        }*/
    

        respuesta = prompt("ingresar si para continuar, cualquier letra para terminar");
    }

    promedio = numPositivos/contadorPositivos;

    document.write("la cantidad de numeros pares es: " + numPares + "<br>" );
    document.write("la cantidad de numeros impares es: " + numImpares + "<br>");
    document.write("la cantidad de 0 es: " + Ceros + "<br>");
    document.write("el promedio de los numeros positivos es: " + promedio + "<br>");
    document.write("la suma de los numeros negativos es" + numNegativos + "<br>");
    document.write("el numero maximo es: " + maximo +  " y la letra maxima es: " + letraMaxima + "<br>");
    document.write("el numero minimo es: " + minimo +  " y la letra minima es: " + letraMinima + "<br>");

}
