// Función para encriptar el texto
function encryptText() {
    // Captura el valor del campo de entrada
    let input = document.getElementById("inputText").value;

    // Solo permitimos letras minúsculas y reemplazamos las vocales
    let encryptedText = input
        .toLowerCase() // Convertir todo a minúsculas
        .replace(/[^a-z]/g, '') // Eliminar caracteres no permitidos
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Mostrar el texto encriptado en el campo de salida
    document.getElementById("outputText").value = encryptedText;
}

// Función para desencriptar el texto
function decryptText() {
    // Captura el valor del campo de entrada
    let input = document.getElementById("inputText").value;

    // Solo permitimos letras minúsculas y reemplazamos las secuencias específicas
    let decryptedText = input
        .toLowerCase() // Convertir todo a minúsculas
        .replace(/[^a-z]/g, '') // Eliminar caracteres no permitidos
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    // Mostrar el texto desencriptado en el campo de salida
    document.getElementById("outputText").value = decryptedText;
}

// Función para copiar el texto del área de salida
function copyText() {
    // Captura el campo de salida
    let outputText = document.getElementById("outputText");

    // Selecciona el texto en el campo de salida
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el texto al portapapeles
    document.execCommand("copy");

    // Muestra una alerta confirmando la copia
    alert("Texto copiado: " + outputText.value);
}

// Función para alternar entre modo día y noche
function toggleTheme() {
    // Captura el cuerpo del documento
    let body = document.body;

    // Alterna la clase de modo noche
    body.classList.toggle("night-mode");

    // Cambia el texto del botón según el modo actual
    let themeButton = document.getElementById("toggleTheme");
    if (body.classList.contains("night-mode")) {
        themeButton.textContent = "Modo Día";
    } else {
        themeButton.textContent = "Modo Noche";
    }
}
