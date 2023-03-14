import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, select] = useState('All');

  function handleSelect(event) {
    // console.log(event.target.value)
    select(selectedCategory => selectedCategory = event.target.value)
  }

  const newList = selectedCategory === 'All' ? items : items.filter(item => item.category === selectedCategory)


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newList.map((item) => (
           <Item key={item.id} name={item.name} category={item.category} />
         ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
