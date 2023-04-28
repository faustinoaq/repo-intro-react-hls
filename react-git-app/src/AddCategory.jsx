import { useState } from "react";

const AddCategory = (onNewCat) => {
  const [ inputValue, setInputValue ] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return
    setInputValue("")
    onNewCat(inputValue.trim())
  };

  const onInputChange =({target}) => {
    setInputValue(target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export default AddCategory;
