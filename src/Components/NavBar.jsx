import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


export default function NavBar() {
  return (
    
    <nav className="navbar navbar-expand-lg bg-ligth navbar-dark bg-dark ">
      <div className="container-fluid" >
        <div className="collapse navbar-collapse" id="navbarSupportedContnt">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 center-center">

            <li className="nav-item col-md-2">
              <Link to="/" className="navbar-brand">Home</Link>
            </li>
            
            <li className="nav-item">
            
            </li>

            <li className="nav-item">
              <Link to="/category/Deportivo" className="navbar-brand">Deportivo</Link>
            </li>

            <li className="nav-item">
              <Link to="/category/Outfit" className="navbar-brand">Outfit</Link>
            </li>


            <li className="nav-item">
              <Link to="/checkout" className="navbar-brand">Check Out</Link>
            </li>



            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        {/* <Link to="/" className="navbar-brand">Home</Link> */}

        </div>
      </div>
    </nav>
  
  );
}

