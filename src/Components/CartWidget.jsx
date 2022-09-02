import React, { useContext} from "react";
import { cartContext } from "./CartContextComponent";
// import ChecKout, {deleteAllFromCart} from "./ChecKout"


export default function CartWidget() {
  const { totalCount, totalToPay, } = useContext(cartContext);
  // const{deleteAllFromCart} = useSt

  return (
    <>
      <div>
        🛒{totalCount}
        💲{totalToPay}
        {/* 🗑️{deleteAllFromCart} */}
      </div>
      ;
    </>
  );
}
