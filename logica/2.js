/*
  Los primeros dispositivos móviles tenían un teclado llamado T9
  con el que se podía escribir texto utilizando únicamente su
  teclado numérico (del 0 al 9).

  Crea una función que transforme las pulsaciones del T9 a su representación con letras.
    - Debes buscar cuál era su correspondencia original
    - Cada bloque de pulsaciones va separado por un guión.
    - Si un bloque tiene más de un número, debe ser siempre el mismo.
    - Ejemplo:
      Entrada: 6-666-88-777-33-3-33-888
      Salida: MOUREDEV
 */

const t9Keyboard = value => {
  if(typeof value !== 'string') throw new Error('t9keyboard "value" argument must be a string')
  if(!value) return ''
  let result = '' 
  let t9Numbers = value.split('-') 
  for(let i = 0; i < t9Numbers.length; i++) {
    let num = parseInt(t9Numbers[i][0]);
    if(num === 0) result += ' '.repeat(t9Numbers[i].length)
    else {
      let numCode = t9Numbers[i][0].charCodeAt(0);
      let Ascii = numCode + 47 + ((num-2)*2) + (t9Numbers[i].length - 1);
      if(num >= 8) Ascii += 1
      result += String.fromCharCode(Ascii)
    }
  }
  return result.toUpperCase()
}

console.log(t9Keyboard('44-33-555-555-666-00-9-666-777-555-3')) // HELLO  WORLD
console.log(t9Keyboard('6-666-88-777-33-3-33-888')) // MOUREDEV
