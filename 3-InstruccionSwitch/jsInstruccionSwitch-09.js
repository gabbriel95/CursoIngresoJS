function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	const TARIFA_BASE=15000;

	estacionIngresada=document.getElementById("txtIdEstacion").value;
	destinoIngresado=document.getElementById("txtIdDestino").value;

	switch(estacionIngresada){
		case "Invierno":
			if(destinoIngresado=="Bariloche"){
				alert(TARIFA_BASE*1.2);
			} else if(destinoIngresado=="Cordoba"){
				alert(TARIFA_BASE*0.9);
			}else if(destinoIngresado=="Cataratas"){
				alert(TARIFA_BASE*0.9);
			}else{
				alert(TARIFA_BASE*0.8);
			}	
		break;
		
	}

	switch(estacionIngresada){
		case "Verano":
			if(destinoIngresado=="Bariloche"){
				alert(TARIFA_BASE*0.8);
			} else if(destinoIngresado=="Cordoba"){
				alert(TARIFA_BASE*1.1);
			}else if(destinoIngresado=="Cataratas"){
				alert(TARIFA_BASE*1.1);
			}else{
				alert(TARIFA_BASE*1.2);
			}	
		break;
		
	}

	switch(estacionIngresada){
		case "Primavera":
			if(destinoIngresado=="Bariloche"){
				alert(TARIFA_BASE*1.1);
			} else if(destinoIngresado=="Cordoba"){
				alert(TARIFA_BASE);
			}else if(destinoIngresado=="Cataratas"){
				alert(TARIFA_BASE*1.1);
			}else{
				alert(TARIFA_BASE*1.1);
			}	
		break;
		
	}

	switch(estacionIngresada){
		case "Otoño":
			if(destinoIngresado=="Bariloche"){
				alert(TARIFA_BASE*1.1);
			} else if(destinoIngresado=="Cordoba"){
				alert(TARIFA_BASE);
			}else if(destinoIngresado=="Cataratas"){
				alert(TARIFA_BASE*1.1);
			}else{
				alert(TARIFA_BASE*1.1);
			}	
		break;
		
	}
}