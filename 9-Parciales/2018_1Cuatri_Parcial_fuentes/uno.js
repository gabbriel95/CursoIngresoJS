
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;

    ancho=prompt ("Ancho del rectangulo");
    largo=prompt ("Largo del rectangulo");

    ancho=parseInt(ancho);
	largo=parseInt(largo);

    perimetro=largo*2+ancho*2;

    alert("el perimetro es " + perimetro)
}
