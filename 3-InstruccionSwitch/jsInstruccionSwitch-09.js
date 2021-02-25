function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var porcentaje;
	var precioFinal;
	const TARIFA_BASE=15000;

	estacionIngresada=document.getElementById("txtIdEstacion").value;
	destinoIngresado=document.getElementById("txtIdDestino").value;

	switch (destinoIngresado){
		case "Bariloche":
			switch(estacionIngresada){
				case "Verano":
					porcentaje=0.8;
				break;
				case "Otoño":
				case "Primavera":
					porcentaje=1.1;
				break;
				case "Invierno":
					porcentaje=1.2;
					
				break;
			}
			precioFinal=TARIFA_BASE*porcentaje;	
			alert("El costo de su viaje es de " + precioFinal);	
		break;

	}

	switch (destinoIngresado){
		case "Carataras":
			switch(estacionIngresada){
				case "Verano":
					porcentaje=1.1;
				break;
				case "Otoño":
				case "Primavera":
					porcentaje=1.1;
				break;
				case "Invierno":
					porcentaje=0.9;
					
				break;
			}
			precioFinal=TARIFA_BASE*porcentaje;	
			alert("El costo de su viaje es de " + precioFinal);	
		break;

	}

	switch (destinoIngresado){
		case "Mar del plata":
			switch(estacionIngresada){
				case "Verano":
					porcentaje=1.2;
				break;
				case "Otoño":
				case "Primavera":
					porcentaje=1.1;
				break;
				case "Invierno":
					porcentaje=0.8;
					
				break;
			}
			precioFinal=TARIFA_BASE*porcentaje;	
			alert("El costo de su viaje es de " + precioFinal);	
		break;

	}

	switch (destinoIngresado){
		case "Cordoba":
			switch(estacionIngresada){
				case "Verano":
					porcentaje=1.1;
				break;
				case "Otoño":
				case "Primavera":
					porcentaje=1;
				break;
				case "Invierno":
					porcentaje=0.9;
					
				break;
			}
			precioFinal=TARIFA_BASE*porcentaje;	
			alert("El costo de su viaje es de " + precioFinal);	
		break;

	}



}


