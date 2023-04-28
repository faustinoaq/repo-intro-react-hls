import { useState } from "react"
import AddCategory from "./AddCategory"
import { useFetchGifs } from "./hooks/useFetchGifs"

function GifApp() {

  const {categories, setCategories} = useState(["Spiderman"])

  const onAddCategory = (newCat) => {
    if (categories.includes(newCat)) return
    setCategories([newCat, ...categories])
  }

  const { images, isLoading } = useFetchGifs(categories)

  console.log("Images: ", images)
  console.log("isLoading: ", isLoading)

  return (
    <div>
      <h1>GifApp</h1>
      <AddCategory onNewCat={value => onAddCategory(value)}/>
    </div>
  )
}

export default GifApp
