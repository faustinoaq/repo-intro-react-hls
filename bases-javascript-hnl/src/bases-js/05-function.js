  // Funciones en JS
  const saludar = (nombre) => {
    const apellido = "Test"
    return `Hola ${nombre} ${apellido}`
  }

  const saludar2 = (nombre) => `Hola ${nombre}`

  const saludar3 = () => "Hola Mundo !!!"

  function saludar4(nombre) {
    return nombre
  }

  console.log("Funciones: ", saludar("Hulk"))
  console.log("Funciones2: ", saludar2("Wanda"))
  console.log("Funciones3: ", saludar3())
  console.log("Funciones4: ", saludar4("Holis"))
