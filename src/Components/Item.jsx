import React from 'react'
import {Link} from 'react-router-dom'

export default function Item({product}) {
  return (
  <>
  <Link to={'/item/'+ product.id}>
    <div>
                    <p>Id:{product.id}</p>
                    <p>Category:{product.idCategory}</p>
                    <p>Name:{product.Name}</p>
                    <p>Price:{product.Price}</p>
                    <p>Stock:{product.Stock}</p>
                    <img style={{ height:"200px" }} src={product.Img} alt={product.Name}></img> 
                    {/* esta en Mayuscola Img,Price,Stock,idCategoria xq asi estan nombradas en Firebase */}
    </div>
    </Link>
    
    <br/>
   
 </>
  )
}
