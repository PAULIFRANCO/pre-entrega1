
coberturaAuto = [
    {
        title: "Responsabilidad Civil", 
        descripcion: "Cubre los reclamos que el asegurado (y/o conductor), pueda recibir como consecuencia de los daños causados a terceras personas o a sus bienes, hasta el límite de cobertura que figura en la póliza y en los términos de la misma."
    },
    {
        title: "Todo Total", 
        descripcion: "Brinda cobertura de daños al casco del vehículo en caso de Incendio Total, Robo y/o Hurto Total  y Daño por Accidente Total."
    },
    {
        title: "Terceros Completo", 
        descripcion: "Brinda coberturas de daños al casco del vehículo en caso de Incendio, Robo y/o Hurto (Total y Parcial) y Daño por Accidente Total, más adicionales."
    },
    {
        title: "Todo Riesgo", 
        descripcion: "Además de la cobertura de Terceros completo, incluye Daño por Accidente Parcial, con y sin Franquicia."
    }
];

coberturaMoto = [
    {
        title: "Responsabilidad Civil", 
        descripcion: "Cubre los reclamos que el asegurado (y/o conductor), pueda recibir como consecuencia de los daños causados a terceras personas o a sus bienes, hasta el límite de cobertura que figura en la póliza y en los términos de la misma."
    },
    {
        title: "Responsabilidad Civil + Incendio", 
        descripcion: "Cubre los reclamos que el asegurado (y/o conductor), puedan recibir como consecuencia de los daños causados a terceras personas o a sus bienes, hasta el límite de cobertura que figura en la póliza y en los términos de esta. Adicionalmente se cubre la pérdida total como consecuencia de incendio.    Disponible para motos de uso particular o comercial sin límite de antigüedad."
    },
    {
        title: "RC + Incendio + Robo", 
        descripcion: "A la cobertura de Responsabilidad Civil se le adicionan coberturas como consecuencia del Robo y/o Hurto total de la moto y cobertura de incendio donde se produzca pérdida total. Disponible para motos de uso particular o comercial hasta quince años de antigüedad."
    }
];

coberturaBici = [
    {
        title: "Bicicleta y Monopatín", 
        descripcion: "Cubre la bicicleta o Monopatín por Robo Total e Incendio Total e incluye una cobertura de Vida para el conductor de la bicicleta."
    },
    {
        title: "Oro", 
        descripcion: "Cubre la bicicleta o Monopatín por Robo Total, Incendio Total, Destrucción Total de la bicicleta por accidente, responsabilidad civil hechos privados y una cobertura de Vida para el conductor de la bicicleta."
    }
];


    
function mostrarProductos(tipo){
    if (tipo == "auto") {
        mostrarCoberturaAuto();
    }else if( tipo == "moto"){
        mostrarCoberturaMoto();
    }else{
        mostrarCoberturaBici();
    }
}
function mostrarCoberturaAuto() {
    let modeloTabla= "";

    for (let i = 0; i < coberturaAuto.length; i++) {
        modeloTabla =  modeloTabla+"<div class='col-sm'>"+'<b>'+coberturaAuto[i].title+'</b>';
        modeloTabla = modeloTabla + '<p class="textoDescripcion">'+coberturaAuto[i].descripcion+'</p></div>';
    }
    document.getElementById("coberturasTexto").innerHTML= modeloTabla;        
        
}

function mostrarCoberturaMoto() {
    let modeloTabla= "";

    for (let i = 0; i < coberturaMoto.length; i++) {
        modeloTabla =  modeloTabla+"<div class='col-sm'>"+'<b>'+coberturaMoto[i].title+'</b>';
        modeloTabla = modeloTabla + '<p class="textoDescripcion">'+coberturaMoto[i].descripcion+'</p></div>';
    }
    document.getElementById("coberturasTexto").innerHTML= modeloTabla;        
}

function mostrarCoberturaBici() {
    let modeloTabla= "";

    for (let i = 0; i < coberturaBici.length; i++) {
        modeloTabla =  modeloTabla+"<div class='col-sm'>"+'<b>'+coberturaBici[i].title+'</b>';
        modeloTabla = modeloTabla + '<p class="textoDescripcion">'+coberturaBici[i].descripcion+'</p></div>';
    }
    document.getElementById("coberturasTexto").innerHTML= modeloTabla;        
        
}

function contactanos(){
    var nombre = prompt("¿Como es tu nombre?")
    if (window.confirm("Esta seguro que quiere comunicarse con un operador "+nombre+"?")) {
        window.open(alert("Ya te pasaremos con un operador "+nombre));
      }
    
}
