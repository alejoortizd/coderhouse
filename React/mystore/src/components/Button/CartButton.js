import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CartButton = ({text}) => {
  return (
    <li>
      <a href="/" className={text}>
        <ShoppingCartIcon />
      </a>
    </li>
   );
}
 
export default CartButton;
