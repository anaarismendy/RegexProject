let cedulaInput, nombresInput, apellidosInput, nombre_usuarioInput, celularInput, emailInput, direccionInput, fecha_nacimientoInput, contrasenaInput, confirmar_contrasenaInput;
window.onload = function(){
    cedulaInput = document.getElementById("cedula");
    nombresInput = document.getElementById("nombre");
    apellidosInput = document.getElementById("apellidos");
    nombre_usuarioInput = document.getElementById("nombre_usuario");
    celularInput = document.getElementById("celular");
    emailInput = document.getElementById("email");
    direccionInput = document.getElementById("direccion");
    fecha_nacimientoInput = document.getElementById("fecha_nacimiento");
    contrasenaInput = document.getElementById("contrasena");
    confirmar_contrasenaInput = document.getElementById("confirmar_contrasena");

    cedulaInput.addEventListener("input", createListener(isValidCedula));
    nombresInput.addEventListener("input", createListener(isValidNombre_Apellidos));
    apellidosInput.addEventListener("input", createListener(isValidNombre_Apellidos));
    nombre_usuarioInput.addEventListener("input", createListener(isValidNombre_usuario));
    celularInput.addEventListener("input", createListener(isValidCelular));
    emailInput.addEventListener("input", createListener(isValidEmail));
    direccionInput.addEventListener("input", createListener(isValidDireccion));
    fecha_nacimientoInput.addEventListener("input", createListener(isValidFecha_nacimiento));
    contrasenaInput.addEventListener("input", createListener(isValidContrasena));
    confirmar_contrasenaInput.addEventListener("input", createListener(isValidConfirmar_contrasena));
};
function isValidCedula(cedula){
    return /^(\d{6,11})$/.test(cedula);
}
function isValidNombre_Apellidos(nombre){
    return /^(([a-zA-Z]+)|([a-zA-Z]+.[a-zA-Z]+))$/.test(nombre);
}
function isValidNombre_usuario(nombre_usuario){
    return /
}
