function mostrar() {
	var numero;
	var contador = 0;
	var contadorNegativos = 0;
	var contadorPositivos = 0;
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPositivos;
	var promedioNegativos;



	var respuesta = true;

	while (respuesta == true) {
		numero = prompt("Ingrese un numero : ");
		numero = parseInt(numero);

		if (numero > 0) {

			contadorPositivos++;
			acumuladorPositivos += numero;
		}
		else {

			if (numero < 0) {

				contadorNegativos++;
				acumuladorNegativos += numero;

			}
			else {
				contadorCeros++;
			}
			if (numero % 2 == 0) {
				contadorPares++;

			}

		}
		respuesta = confirm("Desea ingresar otro numero : ");

	}
	if (contadorPositivos != 0) {
		promedioPositivos = acumuladorPositivos / contadorPositivos;
	}
	else {
		promedioPositivos = "No se ingresaron numeros positivos"
	}
	if (contadorNegativos != 0) {
		promedioNegativos = acumuladorNegativos / contadorNegativos;
	}
	else {
		promedioNegativos = "No se ingresaron numeros Negativos"
	}



	document.write("suma de Positovos: " + acumuladorPositivos + "<br>");
	document.write("suma de Negativos: " + acumuladorNegativos + "<br>");
	document.write("cantidad de Positovos: " + contadorPositivos + "<br>");
	document.write("cantidad de Negativos: " + contadorNegativos + "<br>");
	document.write("cantidad de ceros: " + cantidadCeros + "<br>");
	document.write("cantida de pares: " + contadorPares + "<br>");
	document.write("promedioNegativos: " + promedioNegativos + "<br>");
	document.write("promedioPositivos: " + promedioPositivos + "<br>");




}//FIN DE LA FUNCIÓN