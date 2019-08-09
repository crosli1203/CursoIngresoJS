function mostrar() {
	var contador = 0;

	var numero;

	var multi = 1;
	var respuesta = true;


	while (respuesta == true) {

		numero = parseInt(prompt("Ingrese un numero : "));

		if (numero < 0) {

			multi = multi * numero;

		}

		else if (numero > 0) {

			contador += numero;

		}

		respuesta = confirm("Desea ingresar otro numero : ");

	}
	document.getElementById('suma').value = contador;
	document.getElementById('producto').value = multi;

}//FIN DE LA FUNCIÓN