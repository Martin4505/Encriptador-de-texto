function encriptartexto() {
    let texto = document.getElementById("input-text").value.toLowerCase();
    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
    document.getElementById("output-text").value = textoEncriptado;
}

function desencriptartexto() {
    let texto = document.getElementById("input-text").value.toLowerCase();
    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");
    document.getElementById("output-text").value = textoDesencriptado;
}

function copiar() {
    let texto = document.getElementById("output-text");
    texto.select();
    texto.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");
    alert("Texto copiado al portapapeles!");
}
