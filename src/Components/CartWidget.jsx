import React, { useContext} from 'react'
import { cartContext } from './CartContextComponent'



export default function CartWidget() {
                    const {totalCount, totalToPay} = useContext(cartContext)
               
  return <>
  <div>
                    🛒{totalCount}
                    💲{totalToPay}
                    
                    
</div>;
 </> 
  
}
