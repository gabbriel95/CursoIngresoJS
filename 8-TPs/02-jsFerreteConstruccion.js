/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoDelTerreno;
    var anchoDelTerreno;
    var alambreAComprar;

    largoDelTerreno = parseInt (document.getElementById("txtIdLargo").value); 
    anchoDelTerreno = parseInt (document.getElementById("txtIdAncho").value);

    alambreAComprar = ((largoDelTerreno*2) + (anchoDelTerreno*2))*3;
    

    alert("Usted debe comprar " + alambreAComprar + " metros de alambre");

    
}

function Circulo () 
{
    var radioDelTerreno;
    var diametroDelTerreno;
    var perimetroDelTerreno;
    var alambreAComprar;
    var pi = Math.PI; 
    

    radioDelTerreno = parseFloat (document.getElementById("txtIdRadio").value);
    diametroDelTerreno = radioDelTerreno*2;
    perimetroDelTerreno = pi*diametroDelTerreno;
    alambreAComprar = perimetroDelTerreno*3;
    
    alert("Usted debe comprar " + alambreAComprar + " metros de alambre");

}


function Materiales () 
{
    var largoDelTerreno;
    var anchoDelTerreno;
    var perimetroDelTerreno;
    var superficieDelTerreno;
    var bolsasCemento;
    var bolsasCal;

    largoDelTerreno = parseInt (document.getElementById("txtIdLargo").value); 
    anchoDelTerreno = parseInt (document.getElementById("txtIdAncho").value);
   

    perimetroDelTerreno = (largoDelTerreno*2) + (anchoDelTerreno*2);
    superficieDelTerreno = largoDelTerreno * anchoDelTerreno;
    
    bolsasCemento=superficieDelTerreno*2;
    bolsasCal=superficieDelTerreno*3;

    alert ("Usted debe comprar " + bolsasCemento + " bolsas de cemento" + " y " + bolsasCal + " bolsas de cal")
}
