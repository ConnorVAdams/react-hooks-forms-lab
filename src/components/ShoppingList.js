import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce",
  })
  const [submittedData, setSubmittedData] = useState([])

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const filteredItems = items.filter(item => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function handleSearchChange(event) {
    setSearchTerm(event.target.value)
  }

  const finalItems = filteredItems
  .filter(item => {
    const newSearch = new RegExp(searchTerm, 'i')
    return newSearch.test(item.name)
  })
  .map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))

  function handleSubmit(event) {
    event.preventDefault()
    const newItem = {
      id: uuid(),
    }
    setSubmittedData()
    
    }
  
  function handleFormChange(event) {
    const name = event.target.name
    const value = event.target.value
  
    setFormData(
      {...formData,
      [name]: value,
      })
  }  
    
  return (
    <div className="ShoppingList">
      <ItemForm onFormChange={handleFormChange} onItemFormSubmit={handleSubmit} {...formData} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={searchTerm}/>
      <ul className="Items">
        {finalItems}
      </ul>
    </div>
  );
}

export default ShoppingList;
