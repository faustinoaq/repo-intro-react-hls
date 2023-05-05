import { useFetchGifs } from "../hooks/useFetchGifs"
import GifItem from "./GifItem"

const GifGrid = ({ category }) => {
  const { images, isLoading, onError } = useFetchGifs(category)
  console.log("imagenes:", images)
  return (
    // Fragmento
    <>
      <h3>{category}</h3>
      {isLoading ? <h2>Cargando...</h2> : null}

      <div>
        {images.map((image) => {
          return <GifItem {...image} key={image.id} />
        })}
      </div>
    </>
  )
}

export default GifGrid
