const persona = {
    nombre: "Tony",
    apellido: "stark",
    edad: 45,
    direccion: {
      ciudad: "New York",
      lat: 14.4443,
      lng: 34.5423
    }
  }

  console.table(persona)
  console.log(persona)

  const persona2 = {...persona,amigo: "Peter"}

  console.log("Persona1:", persona)
  console.log("Persona2:", persona2)