import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams()
  console.log(params)
  return (
    <h1>Hola</h1>
  )
};

export default ProductDetail;
