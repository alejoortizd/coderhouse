import { useEffect, useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
import {cargarData} from './helpers/helpers'
import NavBar from "./components/Navbar/Navbar";
import Cards from "./components/itemListContainer/CardsContainer";
import { items } from "./data/Menuitems";
import Page from './components/Routes';

function App() {
  const [cartItem, setCartItem] = useState([]);
  const [products, setProducts] = useState([]);

  const onAdd = (item) => {
    const exist = cartItem.find((product) => product.id === item.id);
    console.log(cartItem[0]?.qty)
    if (!exist) {
      setCartItem([...cartItem, { ...item, qty: 1 }]);
    } else {
      setCartItem(
        cartItem.map((product) =>
          product.id === item.id ? { ...exist, qty: exist.qty + 1 } : product
        )
      );
    }
  };

  const onRemove = (item) => {
    const exist = cartItem.find((product) => product.id === item.id);
    if (!exist) {
      setCartItem([...cartItem, { ...item, qty: 1 }]);
    } else {
      setCartItem(
        cartItem.map((product) =>
          product.id === item.id ? { ...exist, qty: exist.qty - 1 } : product
        )
      );
    }
  };

  useEffect(() => {
    async function fetchData() {
      setTimeout(async() => {
        const response = await cargarData('https://my-json-server.typicode.com/alejoortizd/mockdata/Products');
        setProducts(response[0])
      }, 2000);
    }
    fetchData()
  }, [])

  return (
    <>
      <Router>
        <NavBar items={items} />
        <br></br>
        <Page />
        <Cards products={products} cartItems={cartItem} onAdd={onAdd} onRemove={onRemove}/>
      </Router>
    </>
  );
}

export default App;
