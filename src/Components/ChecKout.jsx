import React, { useContext, useState } from 'react'
import { cartContext } from './CartContextComponent';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import { Link } from 'react-router-dom';


export default function ChecKout() {
  const {totalToPay,cart,deleteAllFromCart} = useContext(cartContext)
  const[name,setName] = useState("");
  const[cel,setCel] = useState("");
  const[email,setEmail] = useState("");
  const[orderId, setOrderId] = useState("")


  function validateForm(){
    const order = {
      buyer: {name,cel,email},
      totalToPay,
      cart,
    }
    //poner un if controlando que se complete bien en los datos
   // console.log(order)

   const db = getFirestore();
   const orders = collection(db,"orders");
   addDoc(orders,order).then(({id})=>{
    setOrderId (id);
    deleteAllFromCart();
  });
  }
  if (cart.length === 0){
    return (<>No hay nada para pagar <Link to="/">Home</Link></>)
  }

  return (
    <>
   
    {orderId ? ("Gracias por confiar en nosotros. Tu ID de compra es :" + orderId) :
    ( 
    <div>
      <h1> Terminar compra, Ingrese Datos</h1>      
      <input type="text" placeholder="name" onchange={(e)=> setName(e.target.value)} />
      <br />
      <input type="tel" placeholder="tel"  onchange={(e)=> setCel(e.target.value)}/>
      <br />
      <input type="email"  placeholder="email" onchange={(e)=> setEmail(e.target.value)}/>
      <br />
      <button onClick={validateForm}>TERMINAR COMPRA</button>
      <br />
    </div>
    )}

    </>
  )
}
