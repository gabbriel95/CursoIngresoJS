function mostrar()
{
    var planeta;

    planeta=prompt("Ingrese un planeta del Sistema Solar");
    switch(planeta){
        case "Mercurio":
        case "Venus":
            alert("Aca hace calor");
                break;
        case "Tierra":
            alert("Aca vivimos");
                break;
        case "Marte":
        case "Jupiter":
        case "Saturno":
        case "Urano":
        case "Neptuno":
            alert("Aca hace frio");
                break;
        default:
            alert("No es un planeta valido");
    }
}
