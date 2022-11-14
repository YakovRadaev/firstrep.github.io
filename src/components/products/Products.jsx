import axios from "axios";
import React from "react";
import Card from "./card/Card";
import style from "./products.module.css";

/*
const products = [
  {
    id: 1,
    title:'Кальцоне',
    description:'Короткое описание продукта',
    price:'100',
    img:'/img/1.jpg'
  },
  {
    id: 2,
    title:'Сицилийская',
    description:'Короткое описание продукта',
    price:'200',
    img:'/img/2.jpg'
  },
  {
    id: 3,
    title:'Римская',
    description:'Короткое описание продукта',
    price:'300',
    img:'/img/3.jpg'
  },
  {
    id: 4,
    title:'Кальцоне',
    description:'Короткое описание продукта',
    price:'100',
    img:'/img/1.jpg'
  },
  {
    id: 5,
    title:'Сицилийская',
    description:'Короткое описание продукта',
    price:'200',
    img:'/img/2.jpg'
  },
  {
    id: 6,
    title:'Римская',
    description:'Короткое описание продукта',
    price:'300',
    img:'/img/3.jpg'
  }
]
*/

const Products = (props) => {

  const onAddToCart = async (objCart) => {
    try {
      const findCartItem = props.cartItems.find((cartItem) => cartItem.myId === objCart.myId)
      if (findCartItem) {
        /*axios.delete(`http://localhost:3001/cart/${findCartItem.id}`)*/
		axios.delete(`https://635701589243cf412f91c8ca.mockapi.io/cart/${findCartItem.id}`)
		
        props.setCartItems(prev => prev.filter(cartItem => cartItem.myId !== objCart.myId))
      } else {
		  
        /*const { data } = await axios.post('http://localhost:3001/cart', objCart)*/
		const { data } = await axios.post('https://635701589243cf412f91c8ca.mockapi.io/cart', objCart)
        props.setCartItems([...props.cartItems, data]);
      }
    }
    catch {
      alert('Не удалось добавить товар в корзину')
    }
  }

  const onAddToFavorite = async (objFavorite) => {
    try {
      const findFavotiteItem = props.favoritesItems.find(favoriteItem => favoriteItem.myId === objFavorite.myId)
      if (findFavotiteItem) {
		  
        /*axios.delete(`http://localhost:3001/favorites/${findFavotiteItem.id}`)*/
		axios.delete(`https://635701589243cf412f91c8ca.mockapi.io/favorites/${findFavotiteItem.id}`)
        props.setFavoritesItems(prev => prev.filter(favItems => favItems.myId !== objFavorite.myId))
      } else {
		  
        /*const { data } = await axios.post('http://localhost:3001/favorites', objFavorite)*/
		const { data } = await axios.post('https://635701589243cf412f91c8ca.mockapi.io/favorites', objFavorite)
        props.setFavoritesItems([...props.favoritesItems, data]);
      }
    }
    catch {
      alert('Не удалось добавить товар в избранное')
    }
  }

  const onSearchInput = (inputValue) => {
    props.setSearch(inputValue.target.value)
  }

  return (
    <div className={style.products_section}>

      <div className={style.search}>

        <h2>{props.search ? `Поиск по запросу: ` + props.search : 'Все смартфоны'}</h2>
        <div className={style.search_block}>
          <img src="/img/search.png" alt="search" />
          <input onChange={onSearchInput} placeholder="Поиск по товарам" />
        </div>
      </div>

      <div className={style.products}>
        {
          props.items.filter((item) => item.title.toLowerCase().includes(props.search.toLowerCase())).map((obj, index) => {
            return (
              <Card
                key={index}
                {...obj}

                onFavorite={
                  (favoritesObj) => {
                    onAddToFavorite(favoritesObj)
                  }
                }
                onPlus={
                  (cartObj) => {
                    onAddToCart(cartObj)
                  }
                }
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Products