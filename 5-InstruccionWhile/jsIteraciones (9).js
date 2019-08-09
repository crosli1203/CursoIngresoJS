function mostrar() {

	var respuesta=true;
	var numero;
	var maxi=0;
	var mini=99999;

	while (respuesta == true) {

		numero = parseInt(prompt("Ingrese un numero : "));

		if (numero < mini) {

			mini=numero;
		}

		else if (numero > maxi) {

			maxi=numero;

		}

		respuesta = confirm("Desea ingresar otro numero : ");

	}
	document.getElementById('maximo').value = maxi;
	document.getElementById('minimo').value = mini;

}//FIN DE LA FUNCIÓN