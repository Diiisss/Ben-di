import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from './CartContextComponent';


export default function ItemCount( {product} ) {
 const [count,setCount] = useState(1);
 const [removeButton,setremoveButton] = useState(false);

 const {cart, addToCart} = useContext(cartContext);
 
 function sum(){
                    if(count < product.Stock){
                    setCount(count +1);
                    }

 }
 function res(){
                    if(count >=2){
                    setCount(count -1);
                    }                   
 }
 function onAdd(){
                    addToCart(product,count);
                    setremoveButton(true);

 }
 
 useEffect(()=>{
console.log(cart);
 },[cart])
  return (<>
    <div>
                    <span style={{cursor:"pointer"}} onClick={sum}>+</span>{count}<span style={{cursor:"pointer"}} onClick={res}>-</span>
                    <br />
                   {removeButton?(<>Producto agregado..<Link to="/">Seguir Comprando..</Link> <Link to="/checkout">Terminar Compra..</Link></>)   : (<button onClick={onAdd}>Agregar al carrito</button>)}
                    
    </div>
    </>
  )
}
