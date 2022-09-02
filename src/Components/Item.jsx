import React from "react";
import { Link } from "react-router-dom";

export default function Item({ product }) {
  return (
    <>
      <Link to={"/item/" + product.id}>
        <div>
          
          
          <p>{product.Name}</p>
          <p>{product.idCategory}</p>
          <p>{product.id}</p>

          <img
            style={{ height: "200px" }}
            src={product.Img}
            alt={product.Name}
          ></img>
          <p>💲{product.Price}</p>
          <p>Stock:🕵️‍♂️{product.Stock}</p>
          {/* esta en Mayuscola Img,Price,Stock,idCategoria xq asi estan nombradas en Firebase */}
        </div>
      </Link>

      <br />
    </>
  );
}
