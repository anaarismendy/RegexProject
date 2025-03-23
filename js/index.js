let inputs = {};

window.onload = function () {
    const ids = [
        "cedula", "nombre", "apellidos", "nombre_usuario", "celular", 
        "email", "direccion", "fecha_nacimiento", "contrasena", "confirmar_contrasena"
    ];

    // Asignar inputs y eventos
    ids.forEach(id => {
        inputs[id] = document.getElementById(id);
        inputs[id].addEventListener("input", createListener(validators[id]));
        inputs[id].addEventListener("keydown", handleEnterKey); // Evento para la tecla Enter
    });

    // Validación específica para confirmar contraseña
    inputs.confirmar_contrasena.addEventListener("input", () => {
        const valid = inputs.contrasena.value === inputs.confirmar_contrasena.value;
        showOrHideTip(!valid, inputs.confirmar_contrasena.nextElementSibling, inputs.confirmar_contrasena);
    });
};

// Validadores
const validators = {
    cedula: (cedula) => /^\d{6,11}$/.test(cedula),
    nombre: (nombre) => /^([a-zA-ZÀ-ÿ]+|[a-zA-ZÀ-ÿ]+\s[a-zA-ZÀ-ÿ]+)$/.test(nombre),
    apellidos: (apellidos) => /^([a-zA-ZÀ-ÿ\s]+\s[a-zA-ZÀ-ÿ\s]+)$/.test(apellidos),
    nombre_usuario: (nombre_usuario) => /^[a-z0-9-_.]{5,15}$/.test(nombre_usuario),
    celular: (celular) => /^([+]\d{1,2}\s)?\d{3}\s\d{3}\s\d{2}\s\d{2}$/.test(celular),
    email: (email) => /^(([a-zA-Z0-9]+[_\-.+%]?)+@([a-zA-Z0-9]+[_\-.]?)+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?)$/.test(email),
    direccion: (direccion) =>  /^([a-zA-Z]+\s\d{2,3}(\s[a-zA-Z]+(\s\d{2,3})?)?\s[A-Z]*(\s[a-zA-Z]+)?\s#\s\d{2}-\d{2})$/.test(direccion),
    fecha_nacimiento: (fecha) => {
        const regex = /^\d{2}[/-]\d{2}[/-]\d{4}$/;
        if (!regex.test(fecha)) return false;
        const fechaNacimiento = new Date(fecha);
        const hoy = new Date();
        const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        return edad >= 18; // Verifica si es mayor de edad
    },
    contrasena: (contrasena) => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(contrasena),
};

// Listener genérico
function createListener(validator) {
    return (e) => {
        const input = e.target;
        const text = input.value;
        const valid = validator(text);
        const showTip = text !== "" && !valid;
        const errorElement = input.nextElementSibling; // Accede al <span> de error
        showOrHideTip(showTip, errorElement, input);
    };
}

// Función para manejar la tecla Enter
function handleEnterKey(e) {
    if (e.key === "Enter") {
        const input = e.target;
        const validator = validators[input.id];
        const text = input.value;
        const valid = validator(text);
        const showTip = text !== "" && !valid;
        const errorElement = input.nextElementSibling; // Accede al <span> de error
        showOrHideTip(showTip, errorElement, input);

        // Mostrar un mensaje adicional si la validación falla
        if (!valid) {
            alert(`Error en ${input.id}: ${errorElement.textContent}`);
        }
    }
}

// Mostrar u ocultar mensajes de error
function showOrHideTip(show, element, input) {
    if (show) {
        element.style.display = "formulario__input-error"; // Muestra el mensaje de error
        input.style.borderBottom = "2px solid #ff0000"; // Cambia el borde a color de error
    } else {
        input.style.borderBottom = "2px solid #00bfb2"; // Cambia el borde a color normal
        element.style.display = "none"; // Oculta el mensaje de error
    }
}