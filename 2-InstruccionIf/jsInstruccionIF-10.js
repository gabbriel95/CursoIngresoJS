function mostrar()
{
	var maximo=11;
	var minimo=1;
	var nota;

	nota=Math.round(Math.random()*(maximo-minimo)+minimo);
	if (nota>=9){
		alert("Su nota es " + nota + " EXCELENTE")
	} else if (nota>=4){
		alert("Su nota es " + nota + " APROBÓ")
	} else {
		alert("Su nota es " + nota + " Vamos, la proxima se puede")
	}



}