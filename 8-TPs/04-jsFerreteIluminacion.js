/*Las lámparas están al mismo precio de $35 pesos final.
A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y
 si es de otra marca el descuento es del 30%.
C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y 
si es de otra marca el descuento es del 20%.
D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es “FelipeLamparas” se hace
 un descuento del 10 % y si es de otra marca un 5%.
E. Si el importe final con descuento (#pConDescuento) suma más de $120 se debe sumar un 10% de ingresos brutos e informar del impuesto
 con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó.
 *///INVERTIR IF Hacerlo con las marcas

 function CalcularPrecio () 
{
    var cantidadDeLamparas;
    var marcaDeLamparas;
    var descuento;
    var precioBruto;
    var precioFinal;
    var aumento;
    
    cantidadDeLamparas=parseInt(document.getElementById("txtIdCantidad").value);
    marcaDeLamparas=document.getElementById("Marca").value;
    precioBruto=cantidadDeLamparas*35;


    switch(cantidadDeLamparas){
        case cantidadDeLamparas>=6:
            
    }

}

