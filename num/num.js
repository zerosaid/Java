function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero === 2) return true;
  
    for (let i = 2; i * i <= numero; i++) {
        if (numero % i === 0) {
          return false;
        }
    }
  
    return true;
  }
  
let num = Number(prompt("Diga un número:"));
  
  if (esPrimo(num)) {
    alert(`El número ${num} ES primo.`);
  } else {
    alert(`El número ${num} NO es primo.`);
  }
  