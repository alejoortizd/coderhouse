import React from "react";
import Product from "../Product/Product";

function Cards(props) {
  const { products, cartItems, onAdd } = props;
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products.map((product) => {
          return (
            <div className="col-md-4">
              <Product key={product.id} product={product} onAdd={onAdd} cartItems={cartItems} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
