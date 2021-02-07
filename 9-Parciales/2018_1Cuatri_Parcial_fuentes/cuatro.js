function mostrar()
{
    var numero1;
    var numero2;
    var random1;
    var random2;
    var suma;
    var random1St;
    var random2St;

    
    numero1=11;
    numero2=1;

    random1=Math.round(Math.random()*(numero1-numero2)+numero2);
    random2=Math.round(Math.random()*(numero1-numero2)+numero2);
    /*ok*/

    if(random1==random2){
        random1St=intValue.toString(random1);
        random2St=intValue.toString(random2);
        alert(random1St+random2St);
    } /*no concatena*/ 
        else if (random1>random2){
        alert(random1-random2)
    } 
        else {
        alert(random1+random2);
        suma=random1+random2;
            if (suma>10){
            alert("La suma es " + suma + " y supero el 10")
        }
    }

}

