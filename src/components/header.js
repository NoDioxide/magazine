import React, { useState } from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map(el => (
        <Order key={el.id} item={el}/>
      ))}
    </div>
  )
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Корзина пуста!</h2>
    </div>
  )
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <div>
        <span className='logo'>Pizza Hub</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Личный кабинет</li>
        </ul>
        <FaShoppingBasket onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-piz-btn ${cartOpen && 'active'}`}/>

        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ?
            showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}
