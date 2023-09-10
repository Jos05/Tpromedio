const arreglo = [12, 24, 54, 23, 56, 78, 86];
let prom = 0;
let suma = 0;

function calcularProm(arr) {
  if (arr.length === 0) {
    console.log("no hay elementos")
  }

  for (let index = 0; index < arr.length; index++) {
    suma += arr[index];
  }

  prom = suma / arr.length;
  return prom;
}

calcularProm(arr);
console.log("El promedio es=", prom);
