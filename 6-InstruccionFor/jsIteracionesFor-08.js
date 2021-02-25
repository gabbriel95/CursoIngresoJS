function mostrar()
{
	var numero;
	var contadorDivisores=0;

	numero=parseInt(prompt("Ingrese un numero"));

	for(let i=1; i<=numero;i++){
		if(numero%i==0){
			contadorDivisores++;
			
		}
	}

	if(contadorDivisores==2){
		alert(numero+" es primo");
	}else{
		alert(numero+" no es primo");
	}

	console.log("Divisores encontrados "+contadorDivisores); 
}