function mostrar()
{
    var numero1;
    var numero2;
    var random1;
    var random2;
    var suma;

    
    numero1A=11;
    numero2A=1;

    random1=Math.round(Math.random()*(numero1-numero2)+random2);
    random2=Math.round(Math.random()*(numero1-numero2)+random2);
    

    if(random1==random2){
        random1=intValue.toString(random1);
        random2=intValue.toString(random2);
        alert(random1+random2);
    } else if (random1>random2){
        alert(random1-random2)
    } else if (random1<random2){
        if (suma>10){
            suma=random1+random2;
            alert("La suma es " + suma + " y supero el 10")
        }
    }

}
