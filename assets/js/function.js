//crea variables iniciales y llama valores de las casillas 
let nombre = document.getElementById("nombre");
let correo = document.getElementById("correo");
let mensaje = document.getElementById("mensaje");


function enviarFormulario(){ 
    //validacion para espacio Nombre
    let mensajesError = []; 
    if(nombre.value === ""){ 
        mensajesError.push("Ingresa tu nombre") 
    }
    
    //validacion para Correo
    let mensajesError2 = [] 
    if(correo.value === "" || !correo.value.includes("@")){ 
        mensajesError2.push("Ingresa tu correo")
    }
    
    //validacion para Mensaje
    let mensajesError3 = [] 
    if(mensaje.value === ""){ 
        mensajesError3.push("Escribe un mensaje") 
    }
    
    //codigo para sobreescribir los <div> con ID de error
    error.innerHTML = mensajesError; 
    error2.innerHTML = mensajesError2; 
    error3.innerHTML = mensajesError3; 


    return false; //impide que el formulario se envie por defecto
}

//Data Table
$(document).ready( function () {
    $("#myTable").DataTable();
} );

