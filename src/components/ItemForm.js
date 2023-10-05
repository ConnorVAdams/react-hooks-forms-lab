import { v4 as uuid } from "uuid";
import { useState } from 'react'

function ItemForm({ onItemFormSubmit }) {

  const [formData, setFormData] = useState({
    name: "",
    category: "Produce",
  })

  function handleFormChange(event) {
    const name = event.target.name
    const value = event.target.value
    
    setFormData(
      {...formData,
        [name]: value
      })
  
  }  

  function onSubmit(event) {
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: formData.name,
      category: formData.category,
    }
    onItemFormSubmit(newItem)
    formData.name = ""
    formData.category = "Produce"
  }

  return (
    <form onSubmit={onSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleFormChange} />
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleFormChange} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
