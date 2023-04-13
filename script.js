function encriptar() {
    let texto = document.getElementById("input-texto").value;

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (document.getElementById("input-texto").value.length != 0) {
        document.getElementById("input-texto").value = textoCifrado;
        document.getElementById("title-right").textContent = "Texto encriptado con éxito";
        document.getElementById("txt-area").textContent = "";
        document.getElementById("img-boy").style.display = "none";
    } else {
        alert("Debes ingresar un texto");
    }
}

function desencriptar() {
    let texto = document.getElementById("input-texto").value;

    let textoCifrado = texto
        .replace(/enter"/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (document.getElementById("input-texto").value.length != 0) {
        document.getElementById("input-texto").value = textoCifrado;
        document.getElementById("title-right").textContent = "Texto desencriptado con éxito";
        document.getElementById("txt-area").textContent = "";
        document.getElementById("img-boy").style.display = "none";
    } else {
        alert("Debes ingresar un texto");
    }
}

function copiar() {
    
}