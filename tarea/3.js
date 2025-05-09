
//Punto3
alert("Escriba la medida de cada lado del triangulo")
let l1 = Number(prompt(`Lado1`))
let l2 = Number(prompt(`Lado2`))
let l3 = Number(prompt(`Lado3`))
let s = (l1+l2+l3)/2
let area = (s*((s-l1)*(s-l2)*(s-l3)))**0.5
alert(`El area del triangulo es: ${area}`)
