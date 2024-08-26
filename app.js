//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function encriptar_texto(){
    let texto = document.getElementById('entrada_texto').value;
    let texto_encriptado = texto.replace(/e/g, "enter");
    texto_encriptado = texto_encriptado.replace(/i/g, "imes");
    texto_encriptado = texto_encriptado.replace(/a/g, "ai");
    texto_encriptado = texto_encriptado.replace(/o/g, "ober");
    texto_encriptado = texto_encriptado.replace(/u/g, "ufat");
    let caja = document.querySelector("#caja_salida");
    caja.innerHTML = texto_encriptado;
}

function desencriptar_texto(){
    let texto_desencriptado = document.getElementById('entrada_texto').value;
    texto_desencriptado = texto_desencriptado.replace(/enter/g, "e");
    texto_desencriptado = texto_desencriptado.replace(/imes/g, "i");
    texto_desencriptado = texto_desencriptado.replace(/ai/g, "a");
    texto_desencriptado = texto_desencriptado.replace(/ober/g, "o");
    texto_desencriptado = texto_desencriptado.replace(/ufat/g, "u");
    let caja = document.querySelector("#caja_salida");
    caja.innerHTML = texto_desencriptado;
}