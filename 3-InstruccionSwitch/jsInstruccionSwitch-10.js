function mostrar()
{
	var estacion;
	var destino;
	const siViaja="Se viaja";
	const noViaja="No se viaja";


	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					alert("Se viaja");
				break;
				default:
					alert("No se viaja");
				break;
			}
		break;
		
		case "Verano":
			switch(destino){
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja");
				break;
				case "Cordoba":
				case "Bariloche":
					alert("No se viaja");
				break;
			}
		break;

		case "Otoño":
			switch(destino){
				case "Mar del plata":
				case "Cataratas":
				case "Cordoba":
				case "Bariloche":
					alert("Se viaja");
				break;
			}
		break;

		case "Primavera":
			switch(destino){
				case "Mar del plata":
				case "Cataratas":
				case "Cordoba":
					alert("Se viaja");
				break;
				case "Bariloche":
					alert("No se viaja");
				break;
			}
		break;
	}








}


