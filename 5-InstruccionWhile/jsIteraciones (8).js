function mostrar() {
	var numero;
	var acumuladorpositivos= 0;
	var acumuladornegativos= 0;
	var contadorPositivos= 0;
	var contadornegativos= 0;

	var respuesta = true;

	while (respuesta == true) {

		numero=prompt(" ingrese un numero");
		parseInt(numero);
		if(numero >0){
			
			acumuladorpositivos+=numero;

		}
			respuesta = confirm("Desea ingresar otro numero : ");

		}
		document.getElementById('suma').value = acumuladorpositivos;
		document.getElementById('producto').value = contadornegativos;

	}//FIN DE LA FUNCIÓN