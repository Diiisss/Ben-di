import React from "react";
import { Link } from "react-router-dom";

export default function Item({ product }) {
  return (
    <>
            <div className="divitem">
              <Link className="puto" style={{ textDecoration: "none"}} to={"/item/" + product.id}>

                <img
                style={{ height: "200px" }}
                src={product.Img}
                alt={product.Name}
                ></img>
                    
                <p>{product.Name}</p>
                <p>{product.idCategory}</p>
                <p>Codigo /{product.id}/</p>
                <p>💲{product.Price}</p>
                <p>Stock:🕵️‍♂️{product.Stock}</p>

              </Link>
            </div>
    </>
  );
}
