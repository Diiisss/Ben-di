import React, { useContext} from "react";
import { cartContext } from "./CartContextComponent";
import { Link } from "react-router-dom";
// import ChecKout, {deleteAllFromCart} from "./ChecKout"


export default function CartWidget() {
  const { totalCount, totalToPay, } = useContext(cartContext);
  // const{deleteAllFromCart} = useSt

  return (
    <>
      <li className="nav-item">
        <Link to="/carrito" className="nav-link active">🛒{totalCount}</Link>
      </li>
      <li className= "nav-item text-white">
        💲{totalToPay}
      </li>
        {/* 🗑️{deleteAllFromCart} */}
    </>
  );
}
