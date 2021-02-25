/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var flag=0;
	var numeroIngresado;
	var numeroMaximo=0;
	var numeroMinimo=0;
	var respuesta;
	//iniciar variables
	do{
		numeroIngresado=parseInt(prompt("Ingrese un numero"));
		
		if(flag==0 || numeroIngresado>numeroMaximo){
			numeroMaximo=numeroIngresado;
		
		}
		if (flag==0 || numeroIngresado<numeroMinimo){

			numeroMinimo=numeroIngresado;
			flag=1;
		}
		respuesta=confirm("desea continuar?");
	} while(respuesta);

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN