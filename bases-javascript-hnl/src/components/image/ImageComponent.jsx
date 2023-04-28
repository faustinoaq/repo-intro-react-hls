
const ImageComponent = ({images, title}) => {
    // console.log("url:", url)
    console.log("title:", title)
    return (
    <div>
      <div>
        <img src={images.original.url} alt={title}/>
      </div>
    </div>
  )
}

export default ImageComponent
