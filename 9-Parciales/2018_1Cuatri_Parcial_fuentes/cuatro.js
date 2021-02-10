function mostrar()
{
    var numero1;
    var numero2;
    var suma;
    
    numero1=prompt("Coloque aqui el primer numero");
    numero2=prompt("Coloque aqui el segundo numero");


    if(numero1==numero2){
        alert(numero1+numero2);    
    } 
    else if (numero1>numero2){
        numero1=parseInt(numero1);
        numero2=parseInt(numero2); 
        alert(numero1-numero2);
    } 
    else {
        numero1=parseInt(numero1);
        numero2=parseInt(numero2); 
        alert(numero1+numero2);   
        suma=numero1+numero2;
            if (suma>10){
            alert("La suma es " + suma + " y supero el 10")
        }
    }

}

