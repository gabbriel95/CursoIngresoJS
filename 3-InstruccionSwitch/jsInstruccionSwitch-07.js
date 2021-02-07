function mostrar()
{
	var destino;
	destino=document.getElementById("txtIdDestino").value;
	switch(destino){
		case "Bariloche":
			alert("Bariloche se encuentra en el oeste");
			break;
		case "Cataratas":
			alert("Cataratas se encuentra en el norte");
			break;
		case "Mar del plata":
			alert("Mar del plata se encuentra en el este");
			break;
		case "Ushuaia":
			alert("Ushuaia se encuentra en el sur");
			break;
	}
}