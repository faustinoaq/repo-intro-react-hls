import { useState } from "react"
import AddCategory from "./components/AddCategory"
import { useFetchGifs } from "./hooks/useFetchGifs"
import GifGrid from "./components/GifGrid"
import "./styles/styles.css"

function GifApp() {
  const [categories, setCategories] = useState(["spiderman"])
  // const [categories, setCategories] = useState("spiderman")

  const onAddCategory = (newCat) => {
    if (categories.includes(newCat)) return
    setCategories([newCat, ...categories])
    // setCategories(newCat)
  }

  return (
    <div>
      <h1>GifApp</h1>
      <AddCategory onNewCat={(value) => onAddCategory(value)} />
      {categories.map((category) => (
        <GifGrid category={category} key={category}></GifGrid>
      ))}
      {/* <GifGrid category={categories} key={categories}></GifGrid> */}
    </div>
  )
}
// GRID y COmponente que renderize

export default GifApp
