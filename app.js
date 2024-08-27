
function encriptar_texto(){
    let texto = document.getElementById('entrada_texto').value;
    let texto_encriptado = texto.replace(/e/g, "enter");
    texto_encriptado = texto_encriptado.replace(/i/g, "imes");
    texto_encriptado = texto_encriptado.replace(/a/g, "ai");
    texto_encriptado = texto_encriptado.replace(/o/g, "ober");
    texto_encriptado = texto_encriptado.replace(/u/g, "ufat");
    let caja = document.querySelector("#caja_salida");
    caja.innerHTML = texto_encriptado;
    let entry = document.getElementById('entrada_texto');
    entry.value = '';
    document.getElementById('cat').setAttribute('style','display: none;');
    document.getElementById('texto_1').setAttribute('style','display: none;');
    document.getElementById('texto_2').setAttribute('style','display: none;');
    document.getElementById('caja_salida').setAttribute('style','');
    document.getElementById('boton_3').setAttribute('style','');
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
    let entry = document.getElementById('entrada_texto');
    entry.value = '';
    document.getElementById('cat').setAttribute('style','display: none;');
    document.getElementById('texto_1').setAttribute('style','display: none;');
    document.getElementById('texto_2').setAttribute('style','display: none;');
    document.getElementById('caja_salida').setAttribute('style','');
    document.getElementById('boton_3').setAttribute('style','');
}

function copiar(){
    let copiartext = document.getElementById('caja_salida')
    copiartext.select();
    document.execCommand("copy");
}

var w = window.innerWidth;

if (w <= 850)  {
    document.getElementById('cat').setAttribute('style','display: none;');
} else if (w > 850){
    document.getElementById('boton_3').setAttribute('style','');
}
