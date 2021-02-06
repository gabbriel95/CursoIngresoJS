/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{//asignacion de variables
	var datoIngresado;
//guarda en la variable, lo que el usuario escribe en la caja prompt
	datoIngresado = prompt("Ingrese el dato");
//devuelve a la caja de la web, lo que el usuario escribio en la caja prompt
	txtIdNombre.value = datoIngresado;
	
	
}
