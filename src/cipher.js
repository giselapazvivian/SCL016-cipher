const cipher = {
  encode: (numeroCifrar, mensajeCifrar) => {
    let mensajeFinal = "";
    for (let i = 0; i < mensajeCifrar.length; i++)
    if (mensajeCifrar.charCodeAt(i) >= 65 && mensajeCifrar.charCodeAt(i) <= 90) {
      let cipher = (mensajeCifrar.charCodeAt(i) - 65 + parseInt(numeroCifrar)) % 26 + 65;
      mensajeFinal += String.fromCharCode(cipher);
    } 
    else {
      mensajeFinal += mensajeCifrar[i];
    }
    
    return mensajeFinal;
    
  },
  decode: (numeroDescifrar, mensajeDescifrar) => {
    let mensajeFinal = "";
    for (let i = 0; i < mensajeDescifrar.length; i++)
    if (mensajeDescifrar.charCodeAt(i) >= 65 && mensajeDescifrar.charCodeAt(i) <= 90) {
      let cipher = (mensajeDescifrar.charCodeAt(i) + 65 - parseInt(numeroDescifrar)) % 26 + 65;
      mensajeFinal += String.fromCharCode(cipher);
    } 
    else {
      mensajeFinal += mensajeDescifrar[i];
    }
    
    return mensajeFinal;
    
  },




};
export default cipher;