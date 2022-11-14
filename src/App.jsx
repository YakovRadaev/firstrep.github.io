import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import Favorites from './components/favorites/Favorites';
import Home from './components/Home';

export const AppContext = React.createContext({})

function App() {
  const [products, setProducts] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoritesItems, setFavoritesItems] = React.useState([]);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    async function axiosData() {
      //const cartData = await axios.get('http://localhost:3001/cart');
	  const cartData = await axios.get('https://635701589243cf412f91c8ca.mockapi.io/cart');
      //const favoritesData = await axios.get('http://localhost:3001/favorites');
	  const favoritesData = await axios.get('https://635701589243cf412f91c8ca.mockapi.io/favorites');
      //const productsData = await axios.get('http://localhost:3001/products');
	  const productsData = await axios.get('https://635701589243cf412f91c8ca.mockapi.io/products');

      setCartItems(cartData.data);
      setFavoritesItems(favoritesData.data);
      setProducts(productsData.data);
    }
    axiosData()
  }, [])

  const onRemoveCartItem = (id) => {
    //axios.delete(`http://localhost:3001/cart/${id}`)
	axios.delete(`https://635701589243cf412f91c8ca.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
  }

  const itemAdded = (id) => {
    return cartItems.some((objCart) => objCart.id === id)
  }

  const itemFavorited = (id) => {
    return favoritesItems.some((objFavorite) => objFavorite.id === id)
  }

  return (
    <AppContext.Provider value={{ 
      products, 
      cartItems, 
      favoritesItems,
      setCartItems,
      setProducts,
      setFavoritesItems,
      itemAdded,
      itemFavorited
    }}>
      
      <div className="app">
        {cartOpened ? <Cart
          onRemoveCartItem={onRemoveCartItem}
          cartItems={cartItems}
          closeCart={() => setCartOpened(false)} 
          totalPrice={      
            cartItems.reduce((totalElements, objs) => totalElements + objs.price, 0)
          }
          /> : null
        }

        <Header openCart={() => setCartOpened(true)} cartItems={cartItems} />
        <Routes>
          <Route path='/favorites' element={
            <Favorites />
          }
          />
          <Route path='/' element={
            <Home
              items={products}
              cartItems={cartItems}
              setCartItems={setCartItems}
              setSearch={setSearch}
              search={search}
              favoritesItems={favoritesItems}
              setFavoritesItems={setFavoritesItems}
            />
          }
          />
        </Routes>
        <Footer />

      </div>
    </AppContext.Provider>
  );
}

export default App;
