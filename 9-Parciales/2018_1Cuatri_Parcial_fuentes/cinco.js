function mostrar()
{
    var planeta;

    planeta=prompt("Ingrese un planeta del Sistema Solar");
    switch(planeta){
        case "mercurio":
        case "venus":
            alert("Aca hace calor");
                break;
        case "tierra":
            alert("Aca vivimos");
                break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            alert("Aca hace frio");
                break;
        default:
            alert("No es un planeta valido");
    }
}
