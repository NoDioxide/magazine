import React, { useState } from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";

export default function Header() {
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
          <div className='shop-cart'></div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}
