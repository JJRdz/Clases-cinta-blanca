// variables string

var nombre = 'jj', apellido = 'Rodriguez';
console.log(nombre)

var nombreEnMayusculas = nombre.toUpperCase();
console.log(nombreEnMayusculas)

var apellidoEnMinusculas = apellido.toLowerCase()
console.log(apellidoEnMinusculas);

var primeraLetraNombre = nombre.charAt(0);
console.log(primeraLetraNombre)

var cantidadLetrasApellido = apellido.length
console.log(cantidadLetrasApellido)

var nombreCompleto = `${nombre} ${apellido}`
console.log(nombreCompleto)

// variables numericas

var decimal = 100.45

var totalDecimal = decimal * 10;
console.log(totalDecimal)

var totalRedondeado = Math.round(totalDecimal)
console.log(totalRedondeado)

var decimalesAString = totalDecimal.toFixed(2)
console.log(decimalesAString)

var stringADecimal = parseFloat(decimalesAString);
console.log(stringADecimal)

function imprimir(){
    console.log(`${nombre} tiene ${edad} anos`)
  }
  
  imprimir()