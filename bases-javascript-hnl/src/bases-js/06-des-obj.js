  // Destructuracion
  const persona = {
    nombre: "Tony",
    edad: 45,
    nombreClave: "IronMan",
    latlng: {
      lat: 14.1233,
      lng: -12.3123
    }
  }

  const { nombre, edad, nombreClave, latlng:{lat, lng}} = persona

  console.log("Propiedad:", persona.nombre)
  console.log("Propiedad nombre:", nombre)
  console.log("Propiedad edad:", edad)
  console.log("Propiedad nombreClave:", nombreClave)
  console.log("Propiedad lat:", lat)
  console.log("Propiedad lng:", lng)
