import { useState } from "react"

const GifItem = ({ url, title, id }) => {
  const [size, setSize] = useState(false)

  return (
    <div
      style={{ width: size ? 400 : 300, height: size ? 400 : 300 }}
      key={id}
      className="card"
      onClick={() => setSize((prevState) => !prevState)}
    >
      <img src={url} alt={title} />
      <p>{title} </p>
    </div>
  )
}

export default GifItem
