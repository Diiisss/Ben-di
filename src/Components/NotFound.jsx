import React from "react";
import Error404 from "./img/404.jpg";

export default function NotFound() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          style={{
            background: "red",
            color: "white",
            fontFamily: "fantasy",
            font: "message-box",
          }}
        >
          Erorr 4 0 4
          <img src={Error404} alt="Imagen de Error" className="col-md-12" />
        </div>
      </div>
    </div>
  );
}
