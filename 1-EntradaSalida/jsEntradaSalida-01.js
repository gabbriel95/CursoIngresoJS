
function mostrar()
{
	var numero;
    var acumulador=0;
	var contador=0;


	while(contador<5){
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		acumulador=acumulador+numero
		contador=contador+1;
		console.log(contador);
	}

	

	alert("La suma total es " + acumulador);
	
	
}