// Debes escribir un programa que encuentre la frecuencia con que aparecen los distintos caracteres (letras y números) dentro de una cadena de texto. 
// El resultado se devuelve una matriz de objetos. 
// Cada uno de estos objetos tiene 2 campos: carácter (caracter) y número de veces que aparece (veces). 
// La matriz estará ordenada por el campo carácter. 
// No se diferencia entre mayúsculas y minúsculas ni entre vocales acentuadas.

// Ejemplo:

// contarCar("Hoy ya es día 10")

// deberá devolver:

// {car: '0', veces: 1}
// {car: '1', veces: 1}
// {car: 'a', veces: 2}
// {car: 'd', veces: 1}
// {car: 'e', veces: 1}
// {car: 'h', veces: 1}
// {car: 'i', veces: 1}
// {car: 'o', veces: 1}
// {car: 's', veces: 1}
// {car: 'y', veces: 2}

const contarCar = value => {
  if(typeof value !== 'string') throw new Error('contarCar "value" argument must be a string')
  if(value === '') return []
  value = value.toLowerCase().replaceAll(/([^\wñáéíóú]|_)+/g, '')
  value = [...value].map(char => char !== 'ñ' ? char.normalize('NFD')[0] : char).sort().join('')
  let cars = [], ref = 0
  for(let i = 0; i < value.length; i++) {
    if(cars[ref] === undefined) cars[ref] = { car: value[i], veces: 1 }
    else cars[ref].veces ++
    if(cars[ref].car !== value[i + 1]) ref++ 
  }
  return cars
}
  
console.log(contarCar('¿Cuál es la contraseña para la organización? PASSWORD: ^_b3-_-Trus7y_$'))
console.log(contarCar('Hoy ya es día 10'))

