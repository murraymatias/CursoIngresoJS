function mostrar()
{
    var mensaje;
    var mesDelAño
    
    mesDelAño= document.getElementById('mes').value;

    alert (mesDelAño);

    switch (mesDelAño) {
        case "Enero":
            mensaje = "Falta para el invierno.";
            break;

        case "Febrero":
            mensaje = "Falta para el invierno.";
            break;

        case "Marzo":
            mensaje = "Falta para el invierno.";
            break;

        case "Abril":
            mensaje = "Falta para el invierno.";
            break;

        case "Mayo":
            mensaje = "Falta para el invierno.";
            break;

        case "Junio":
            mensaje = "Falta para el invierno.";
            break;

        case "Julio":
            mensaje = "Abrigate que hace frio.";
            break;

        case "Agosto":
            mensaje = "Abrigate que hace frio.";
            break;

        case "Septiembre":
            mensaje = "Ya pasamos el frio, ahora calor!!!.";
            break;
            
        case "Octubre":
            mensaje = "Ya pasamos el frio, ahora calor!!!.";
            break;

        case "Noviembre":
            mensaje = "Ya pasamos el frio, ahora calor!!!.";
            break;

        case "Diciembre":
            mensaje = "Ya pasamos el frio, ahora calor!!!.";
            break;

    }

    alert(mensaje);
}