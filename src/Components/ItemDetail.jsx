import React from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({ product }) {
  return (
    <>
      <div>
        <h1>{product.Name}</h1>
        <h2>{product.idCategory}</h2>
        <img
          style={{ height: "250px" }}
          src={product.Img}
          alt={product.Name}
        ></img>
        <h3>Price:💲{product.Price}</h3>
        <h3>Stock:🕵️‍♂️{product.Stock}</h3>
        {/* esta en Mayuscola Img,Price,Stock,idCategoria xq asi estan nombradas en Firebase */}
        <ItemCount product={product} />
      </div>
    </>
  );
}
