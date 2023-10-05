import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit, onFormChange, name, category }) {


  return (
    <form onSubmit={onItemFormSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={onFormChange} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={onFormChange} >
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
