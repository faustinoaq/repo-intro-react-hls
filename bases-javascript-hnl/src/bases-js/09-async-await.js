import { heros } from "./data/heros"

const test = async () => {
    const data = await heros.map(e => e.nombre)
    console.log(data)
}

test()
