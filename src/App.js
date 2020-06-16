/* 
Given a list of products (as an array of objects, as seen in productsData.js)
render a <Product /> component (which you'll also need to create) for each
product in the list.

Make sure to use the array's `.map()` method to create these components, and 
don't forget to pass a `key` prop to it to avoid the warning.
*/

import React from "react";
import vschoolProducts from "./data2/vschoolProducts";
import Product from "./components/Product";

function App() {
  console.log(vschoolProducts[0]);

  /*let p2 = vschoolProducts.map((v) => {
    console.log(v.id);
    //return v.id;
  });*/

  const jokeComponents = vschoolProducts.map((joke) => console.log(joke));

  const p = vschoolProducts.map((v) => (
    <Product
      key={v.id}
      name={v.name}
      price={v.price}
      description={v.description}
    />
  ));

  return <div>{p}</div>;
}

export default App;
