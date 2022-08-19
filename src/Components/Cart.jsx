import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from './CartContextComponent'


export default function Cart() {

  const {cart,totalCount, totalToPay,deleteFromCart} = useContext(cartContext)

  return(
    <>
    {cart.map((item)=>(
    
    <div key={item.id}>
      {item.Name + " " + item.count} 
      <span onClick={()=> deleteFromCart(item.id)}>🗑️</span>
    </div>
    

    ))}
    <div>
      Tienes en el  🛒 {totalCount} articulos su total es 💲{totalToPay}
    </div>;
    <Link to="/checkout">TERMINAR COMPRA</Link>
    </>
  )
}
