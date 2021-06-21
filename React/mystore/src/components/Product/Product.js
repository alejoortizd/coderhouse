import React from "react";

const Product = (props) => {
  const { product, onAdd, cartItems, onRemove } = props;
  const qty = cartItems.find(item => item.id === product.id)?.qty || 0;
  return (
    <div className="card text-center">
      <img src={product.image} className="card-img-top" alt={product.brand} />
      <div className="card-body">
        <h5 className="card-title">
          <strong>{product.brand}</strong>
        </h5>
        <p className="card-text">
          <strong>Modelo: </strong>
          {product.model}
        </p>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button disabled={!qty} type="button" className="btn btn-danger" onClick={() => onRemove(product)}>
            -
          </button>
          <div className="input-group-text" id="btnGroupAddon2">
            {qty}
          </div>
          <button type="button" className="btn btn-success" onClick={() => onAdd(product)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
