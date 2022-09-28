import React, { useState } from "react";

function Item({ name, category }) {
  const [cart,setCart]=useState("")

  const addToCart= cart? "in-cart":""
  function handleCart(){
    setCart((addToCart)=>!addToCart)
  }
  return (
    <li className={addToCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
