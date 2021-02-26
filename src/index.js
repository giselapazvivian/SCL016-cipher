import cipher from './cipher.js';
//Declarar variables
const botonCambioPagina = document.getElementById("botonCambioPagina");
const botonVolver = document.getElementById("botonVolver");
const cifrar = document.getElementById("botonCifrar");
const descifrar = document.getElementById("botonDescifrar");

//ir de página 1 a 2
const cambioPagina = () => {
    document.querySelector(".primeraPagina").style.display = "none";
    document.querySelector(".segundaPagina").style.display = "block";
}
botonCambioPagina.addEventListener("click", cambioPagina);

//Cambiar letras minúsculas por mayúsculas para cifrar
const mayuscula = () => {
    let x = document.getElementById("mensajeCifrar");
    x.value = x.value.toUpperCase();
}
document.getElementById("mensajeCifrar").addEventListener("keyup", mayuscula);

//Botón Cifrar
const botonCifrar = () => {
    let numeroCifrar = document.getElementById("numeroCifrar").value;
    let mensajeCifrar = document.getElementById("mensajeCifrar").value;
    let mensajeCifrado = cipher.encode(numeroCifrar, mensajeCifrar);
    document.getElementById("mensajeCifrar").value = mensajeCifrado;

    // console.log(numeroCifrar);
    // console.log(mensajeCifrar);
    // console.log(mensajeCifrado);
}
cifrar.addEventListener("click", botonCifrar);

//Cambiar letras minúsculas por mayúsculas para descifrar
const mayuscula1 = () => {
    let x = document.getElementById("mensajeDescifrar");
    x.value = x.value.toUpperCase();
}
document.getElementById("mensajeDescifrar").addEventListener("keyup", mayuscula1);

//Botón Descifrar
const botonDescifrar = () => {
    let numeroDescifrar = document.getElementById("numeroDescifrar").value;
    let mensajeDescifrar = document.getElementById("mensajeDescifrar").value;
    let mensajeDescifrado = cipher.decode(numeroDescifrar, mensajeDescifrar);
    document.getElementById("mensajeDescifrar").value = mensajeDescifrado;
    // console.log(numeroDescifrar);
    // console.log(mensajeDescifrar);
    // console.log(mensajeDescifrado);
}
descifrar.addEventListener("click", botonDescifrar);

//volver a 1era página
const Volver = () => {
    document.querySelector(".primeraPagina").style.display = "block";
    document.querySelector(".segundaPagina").style.display = "none";
}
botonVolver.addEventListener("click", Volver);

//console.log(cipher);

