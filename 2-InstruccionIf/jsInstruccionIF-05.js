function mostrar()
{
	var edad;
	edad=parseInt(document.getElementById("txtIdEdad").value);
	if(edad>17){
		alert("Usted NO es adolescente")
	} else if (edad<13){
		alert("Usted NO es adolescente")
	} else{ 
		alert ("Usted es adolescente")
	}
		
		
}

/*function mostrar()
{
	var edad;
	edad=parseInt(document.getElementById("txtIdEdad").value);
	if(edad<=12 || edad>=18){
		alert("Usted no es adolescente");
	}

}*/