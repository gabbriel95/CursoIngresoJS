/*Las lámparas están al mismo precio de $35 pesos final.
A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y
 si es de otra marca el descuento es del 30%.
C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y 
si es de otra marca el descuento es del 20%.

 */
function CalcularPrecio () 
{
    var cantidadDeLamparas;
    var marcaDeLamparas;
    const PRECIO_DE_LAMPARAS=35;
    var pTotalSinDescuento;
    var descuento;
    var pConDescuento;
    var impuestoIngresosBrutos;
    var pFinalConIIBB;
    

    cantidadDeLamparas=parseInt(document.getElementById("txtIdCantidad").value);
    marcaDeLamparas=document.getElementById("Marca").value;
    
    if(cantidadDeLamparas>=6){ //A
        pTotalSinDescuento=PRECIO_DE_LAMPARAS*cantidadDeLamparas;
        descuento=50*pTotalSinDescuento/100;
        pConDescuento=pTotalSinDescuento-descuento;
        document.getElementById("txtIdprecioDescuento").value=pConDescuento; 
    } 
    else if(cantidadDeLamparas==5 && marcaDeLamparas=="ArgentinaLuz"){ //B
        pTotalSinDescuento=PRECIO_DE_LAMPARAS*cantidadDeLamparas;
        descuento=40*pTotalSinDescuento/100;
        pConDescuento=pTotalSinDescuento-descuento;
        document.getElementById("txtIdprecioDescuento").value=pConDescuento; 
    }
    else if(cantidadDeLamparas==5 && marcaDeLamparas!="ArgentinaLuz"){ //B
        pTotalSinDescuento=PRECIO_DE_LAMPARAS*cantidadDeLamparas;
        descuento=30*pTotalSinDescuento/100;
        pConDescuento=pTotalSinDescuento-descuento;
        document.getElementById("txtIdprecioDescuento").value=pConDescuento; 
    }
    else if(cantidadDeLamparas==4 && (marcaDeLamparas=="ArgentinaLuz" || marcaDeLamparas=="FelipeLamparas")){//C
        pTotalSinDescuento=PRECIO_DE_LAMPARAS*cantidadDeLamparas;
        descuento=25*pTotalSinDescuento/100;
        pConDescuento=pTotalSinDescuento-descuento;
        document.getElementById("txtIdprecioDescuento").value=pConDescuento; 
    }
    else if(cantidadDeLamparas==4 && (marcaDeLamparas!="ArgentinaLuz"|| marcaDeLamparas!="FelipeLamparas")){//C
        pTotalSinDescuento=PRECIO_DE_LAMPARAS*cantidadDeLamparas;
        descuento=20*pTotalSinDescuento/100;
        pConDescuento=pTotalSinDescuento-descuento;
        document.getElementById("txtIdprecioDescuento").value=pConDescuento; 
    }
    /*D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es “FelipeLamparas” se hace
 un descuento del 10 % y si es de otra marca un 5%.
E. Si el importe final con descuento (#pConDescuento) suma más de $120 se debe sumar un 10% de ingresos brutos e informar del impuesto
 con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó.
 */
    else if(cantidadDeLamparas==3 && marcaDeLamparas=="ArgentinaLuz"){//D
        pTotalSinDescuento=PRECIO_DE_LAMPARAS*cantidadDeLamparas;
        descuento=15*pTotalSinDescuento/100;
        pConDescuento=pTotalSinDescuento-descuento;
        document.getElementById("txtIdprecioDescuento").value=pConDescuento; 
    }
    else if(cantidadDeLamparas==3 && marcaDeLamparas=="FelipeLamparas"){//D
        pTotalSinDescuento=PRECIO_DE_LAMPARAS*cantidadDeLamparas;
        descuento=10*pTotalSinDescuento/100;
        pConDescuento=pTotalSinDescuento-descuento;
        document.getElementById("txtIdprecioDescuento").value=pConDescuento; 
    } 
    else if(cantidadDeLamparas==3 && (marcaDeLamparas!="FelipeLamparas" || marcaDeLamparas!="ArgentinaLuz")){//D
        pTotalSinDescuento=PRECIO_DE_LAMPARAS*cantidadDeLamparas;
        descuento=5*pTotalSinDescuento/100;
        pConDescuento=pTotalSinDescuento-descuento;
        document.getElementById("txtIdprecioDescuento").value=pConDescuento; 
    } 
    if(pConDescuento>=120){//E
        impuestoIngresosBrutos=(pConDescuento*10)/100;
        alert("IIBB usted pago $ "+ impuestoIngresosBrutos);
        pFinalConIIBB=pConDescuento+impuestoIngresosBrutos;
        document.getElementById("txtIdprecioDescuento").value=pFinalConIIBB; 
    }
    else{
        pTotalSinDescuento=PRECIO_DE_LAMPARAS*cantidadDeLamparas;

        document.getElementById("txtIdprecioDescuento").value=pTotalSinDescuento;
    }




}
