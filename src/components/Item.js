import React, {useState} from "react";

function Item({ name, category }) {
  const [add, setAdd] = useState(true)

  function handleClick() {
    setAdd(add => !add)
  }

  return (
    <li className={add ?  "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{add ? 'Add to Cart' : 'Remove From Cart'}</button>
    </li>
  );
}

export default Item;
