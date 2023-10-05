import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("")

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
    
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={searchTerm}/>
      <ul className="Items">
        {finalItems}
      </ul>
    </div>
  );
}

export default ShoppingList;
