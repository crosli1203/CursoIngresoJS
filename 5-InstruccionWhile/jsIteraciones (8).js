function mostrar() {
	var contador=0;
	var acumuladornegativos=0;
	var multinega;
	var numero;
	var respuesta= true;

	while (respuesta ==true) {

		numero = parseInt(prompt("Ingrese un numero : "));

		if(numero > 0){
       contador+=numero;
		}

		else if(numero < 0){
				
	  acumuladornegativos++;

		  multinega=acumuladornegativos*=numero;
	  
		}

			respuesta = confirm("Desea ingresar otro numero : ");

		}
		document.getElementById('suma').value =contador;
		document.getElementById('producto').value =multinega;

	}//FIN DE LA FUNCIÓN