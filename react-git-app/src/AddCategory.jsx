import { useState } from "react"

const AddCategory = (props) => {
  const { children, onNewCat } = props
  const [inputValue, setInputValue] = useState([])

  const onSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim().length <= 1) return
    setInputValue("")
    onNewCat(inputValue.trim().toLowerCase())
  }

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar gif"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
      {children}
    </div>
  )
}

export default AddCategory
