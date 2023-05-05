const GifItem = ({ url, title, id }) => {
  return (
    <div key={id}>
      <img src={url} alt={title} />
      <p>{title} </p>
    </div>
  )
}

export default GifItem
