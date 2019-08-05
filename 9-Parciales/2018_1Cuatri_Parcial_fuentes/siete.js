function mostrar() {
    var nota;
    var sexo;
    var contador;
    var acumulador = 0;
    var notabaja;
    var sexominimo;
    var contadorvarones = 0;



    for (contador = 0; contador < 5; contador++) {
        nota = parseInt(prompt("ingresar nota 0-10: "));

        while (!(nota >= 0 && nota <= 10))
        //es lo mismo de las dos maneras es igual (isNaN(nota) || nota<0 || nota>10)
        {
            nota = parseInt(prompt("ingrese un numero del 0 al 10"));

        }

        acumulador = acumulador + nota;

        sexo = prompt("ingrese sexo");

        while (sexo != "m" && sexo!= "f") {
            
            sexo = prompt("Error, ingrese f o m");
        }
        if (contador == 1) {
            notabaja = nota;
            sexominimo = sexo;
        }
        else if (nota < notabaja) {
            notabaja = nota;
            sexominimo = sexo;
        }

        if (sexo == "m" && nota >= 6) {
            contadorvarones++;
        }
    }



    alert("el promedio de las notas totales es " + acumulador / 5);
    alert("la nota mas baja es " + notabaja + " y su sexo es " + sexominimo);
    alert("la cantidad de varones que su nota haya sido mayor a o igual a 6 es " + contadorvarones);

}
