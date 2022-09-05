import React, { useContext, useState } from "react";
import { cartContext } from "./CartContextComponent";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import TerminarCompra from './img/Terminarcompra.png'
import IngreseDatos from  './img/IngreseDatos.png'



export default function ChecKout() {
  const { totalToPay,totalCount, cart, deleteAllFromCart } = useContext(cartContext);
  const [name, setName] = useState("");
  const [cel, setCel] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");

  function validateForm() {
    const order = {
      buyer: { name, cel, email },
      totalToPay,
      cart,
    };

    const db = getFirestore();
    const orders = collection(db, "orders");
    addDoc(orders, order).then(({ id }) => {
      setOrderId(id);
      deleteAllFromCart();
    });
  }
 // if (cart.length === 0) {
  //   return (
  //     <>
  //       No hay nada para pagar <Link to="/">Home</Link>
  //     </>
  //   );
  // }  MIRAR CON Y SIN ESTO
 
  return (
    <>
      {orderId ? (<>
        <h3>{"Gracias por confiar en nosotros. Tu ID de compra es : " + orderId}</h3>
        <br />
        <Link  to="/">🥳GRACIASS!🎉🎉</Link>
        </>

       
      ) : (
        <div>
          
        <img src={TerminarCompra} alt="" />
               
            
          <h1 style={{fontFamily:'cursive', color:'darkgreen'}}>
             Tienes en el  🛒, {totalCount} Productos su total es 💲{totalToPay}
          </h1>
             
          <img src={IngreseDatos}  alt="IngreseDatos" style={{width:'400px'}}/>  
           <h2>👇</h2>
          <input
            style={{backgroundColor:'lightgreen', border:'5px',width:'25%'}}
            type="text"
            placeholder="Nombre y Apellido"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            style={{backgroundColor:'lightgreen', border:'5px',width:'25%'}}
            type="tel"
            placeholder="Celular"
            onChange={(e) => setCel(e.target.value)}
          />
          <br />
          <input
            style={{backgroundColor:'lightgreen', border:'5px',width:'25%'}}
            type="email"
            placeholder="Nombre@apellido.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <button onClick={validateForm}style={{backgroundColor:'lightgreen', borderRadius:'3px', textDecoration:'none',textShadow:'0 1px 0 rgba(255,255,255,0.3)',color:'darkblue'}}> TERMINAR COMPRA</button>
        
          <br />
          
        </div>
      )}
    </>
  );
}
