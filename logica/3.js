/*
 * Dado un array de números enteros positivos, donde cada uno
 * representa unidades de bloques apilados, debemos calcular cuantas unidades
 * de agua quedarán atrapadas entre ellos.
 *
 * - Ejemplo: Dado el array [4, 0, 3, 6, 1, 3].
 *
 *          ⏹
 *          ⏹
 *   ⏹💧💧 ⏹
 *   ⏹💧⏹⏹💧⏹
 *   ⏹💧⏹⏹💧⏹
 *   ⏹💧⏹⏹⏹⏹
 *
 *   Representando bloque con ⏹︎ y agua con 💧, quedarán atrapadas 7 unidades
 *   de agua. Suponemos que existe un suelo impermeable en la parte inferior
 *   que retiene el agua.
 */

const waterBlocks = (value = []) => {
  if (!Array.isArray(value) || !value.every(n => typeof n === 'number'))
    throw new Error('waterBlocks "value" argument must be a array of numbers')
  if (value.length < 3) return 0
  let caughtUp = 0
  let top = getSubTop(value)
  for (let i = 0; i <= top; i++) {
    let firstBlock = value.findIndex(n => n !== 0)
    let lastBlock = value.findLastIndex(n => n !== 0)
    for (let i = firstBlock; i <= lastBlock; i++) value[i] === 0 && caughtUp++
    value = decrease(value)
  }
  return caughtUp
}

/* aux functs */
const decrease = arr => arr.map(num => num > 0 ? num - 1 : num)
const getSubTop = arr => [...arr].sort((a, b) => b - a)[1]

console.log(waterBlocks([4, 0, 3, 6, 1, 3])) // -> 7

/* ---------------------------------------- */

/*  Dado el array [3, 0, 6, 1, 2, 3, 0, 4, 0, 1]:
     ⚫ 
     ⚫
     ⚫🔵🔵🔵🔵⚫
⚫🔵⚫🔵🔵⚫🔵⚫
⚫🔵⚫🔵⚫⚫🔵⚫
⚫🔵⚫⚫⚫⚫🔵⚫🔵⚫ 
*/  console.log(waterBlocks([3, 0, 6, 1, 2, 3, 0, 4, 0, 1])) // -> 14

/*  Dado el array [3, 0, 6, 1, 2, 3, 0, 4, 0, 1]:
  
⚫
⚫🔵🔵🔵🔵🔵⚫
⚫🔵🔵🔵🔵🔵⚫🔵⚫
⚫⚫🔵🔵🔵⚫⚫🔵⚫🔵⚫
⚫⚫⚫🔵⚫⚫⚫⚫⚫🔵⚫⚫
*/  console.log(waterBlocks([5, 2, 1, 0, 1, 2, 4, 1, 3, 0, 2, 1])) // -> 18

/*  Dado el array [3, 0, 6, 1, 2, 3, 0, 4, 0, 1]:
  
        ⚫
        ⚫🔵🔵⚫🔵⚫   
⚫🔵🔵⚫🔵🔵⚫🔵⚫
⚫🔵🔵⚫🔵🔵⚫🔵⚫🔵🔵⚫  
⚫⚫🔵⚫🔵⚫⚫🔵⚫🔵⚫⚫🔵🔵⚫
⚫⚫⚫⚫⚫⚫⚫🔵⚫🔵⚫⚫🔵⚫⚫
*/  console.log(waterBlocks([4, 2, 1, 6, 1, 2, 5, 0, 5, 0, 2, 3, 0, 1, 2])) // -> 24