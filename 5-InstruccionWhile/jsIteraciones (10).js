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
	var diferencia = 0;
	var respuesta = true;



	while (respuesta == true) {

		numero = parseInt(prompt("Ingrese un numero : "));
		//contador de numeros positivos y acumulador/suma de numeros positivos
		if (numero > 0) {

			contadorPositivos++;
			acumuladorPositivos += numero;
		}
		else {
			//contador de numeros negativos y acumulador/suma de numeros negativos
			if (numero < 0) {

				contadorNegativos++;
				acumuladorNegativos += numero;

			}
			//contador de ceros
			else {
				contadorCeros += 1;
			}
			//contador de pares
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
		promedioPositivos = "No se ingresaron numeros positivos" + "<br>"
	}
	if (contadorNegativos != 0) {
		promedioNegativos = acumuladorNegativos / contadorNegativos;
	}
	else {
		promedioNegativos = "No se ingresaron numeros Negativos" + "<br>"
	}

	diferencia = contadorPositivos - contadorNegativos;

	document.write("suma de Positivos: " + acumuladorPositivos + "<br>");
	document.write("suma de Negativos: " + acumuladorNegativos + "<br>");
	document.write("cantidad de Positivos: " + contadorPositivos + "<br>");
	document.write("cantidad de Negativos: " + contadorNegativos + "<br>");
	document.write("cantidad de ceros: " + contadorCeros + "<br>");
	document.write("cantida de pares: " + contadorPares + "<br>");
	document.write("promedioNegativos: " + promedioNegativos + "<br>");
	document.write("promedioPositivos: " + promedioPositivos + "<br>");
	document.write("diferenciaNumeros: " + diferencia + "<br>");



}//FIN DE LA FUNCIÓN