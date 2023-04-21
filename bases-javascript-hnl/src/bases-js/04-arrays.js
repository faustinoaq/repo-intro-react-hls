  //Arreglo js
  //const arreglo = new Array(100)
  const arreglo = []

  arreglo.push(1)
  arreglo.push(2)
  arreglo.push(3)
  arreglo.push(4)
  arreglo.push(5)

  let arreglo2 = [...arreglo, 10]

  const arreglo3 = arreglo2.map((valor) => {
    return valor * 2
  })

  console.log("Arreglo: ", arreglo)
  console.log("Arreglo2: ", arreglo2)
  console.log("Arreglo3: ", arreglo3)