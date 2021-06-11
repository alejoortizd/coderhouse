import React from 'react';
import {CardItems} from './CardItems';

const ItemListContainer = () => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {CardItems.map((data) => {
        return (
        <div className="col-md-4">
          <div className="card text-center">
            <img src={data.image} className="card-img-top" alt={data.brand} />
            <div className="card-body">
              <h5 className="card-title"><strong>{data.brand}</strong></h5>
              <p className="card-text"><strong>Modelo: </strong>{data.model}</p>
              <a href="/#" className="btn btn-primary">{data.info}</a>
            </div>
          </div>
        </div>
      )
      })}
    </div>
  );
}
 
export default ItemListContainer;
