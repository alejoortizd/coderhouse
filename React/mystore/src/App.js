import { useState } from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Cards from './components/Card/Cards';
import {CardItems} from './data/CardItems';
import { items } from './data/Menuitems';

function App() {
  const [cartItem, setCartItem] = useState([]);
  const onAdd = item => {
    const exist = cartItem.find(product => product.id === item.id);
    if (!exist) {
      setCartItem([...cartItem, { ...item, qty: 1 }]);
    } else {
      setCartItem(
        cartItem.map((product) =>
        product.id === item.id ? { ...exist, qty: exist.qty + 1 } : product
        )
      );
    }
  }

  return (
    <>
      <NavBar items={items}/>
      <br></br>
      <Cards products={CardItems} cartItems={cartItem} onAdd={onAdd}/>
    </>
  );
}

export default App;
