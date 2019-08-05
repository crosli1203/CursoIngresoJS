function mostrar() {

	var contador = 0;
	var acumulador = 0;
	var respuesta = true;
	
	while (respuesta == true) {

		acumulador += parseInt(prompt(" ingrese un numero"));
		contador++;


		respuesta = confirm("Desea ingresar otro numero : ");
	}



	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN