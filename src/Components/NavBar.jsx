import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

export default function NavBar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/category/Deportivo">Deportivo</Link>
      <br />
      <Link to="/Category/Outfit">Outfit</Link>
      <br />
      <Link to="/carrito">Carrito</Link>
      <br />
      <Link to="/checkout">Check Out</Link>
    
      <br />
      <CartWidget />

    </div>
  )
}
