import React from "react";

function Product(props) {
  return (
    <div>
      <h3>name: {props.name}</h3>
      <h3>price: {props.price}</h3>
      <h3>description: {props.description}</h3>
      <hr />
    </div>
  );
}

export default Product;
