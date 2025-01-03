import React, { useContext } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiHeart } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import Like from "../Pages/Like";
import Profile from "../Pages/Profile";
import Category from "../Pages/Category";
import CartContext from "../CartContext";

export default function Header() {
  let {state,dispatch}=useContext(CartContext)
  return (
    <>
      <nav class=" bg-secondary-subtle">
        <div class="container ">
          <p>
            <FaPhoneAlt /> 9801433555{" "}
          </p>
        </div>
      </nav>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Link to="/">
                <img
                  src="https://www.digitalsahuji.com/storage/app/public/company/2023-06-27-649a72e48c94a.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="col lg-3">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Here....."
                />
                <div class="input-group-append">
                  <button class="btn bg-primary" type="button">
                    <IoSearchOutline />
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 text-end ">
              <Link
                type="button"
                className="btn bg-secondary-subtle rounded-circle position-relative me-3"
                to="/like"
              >
                <CiHeart className="fs-4" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                  0<span className="visually-hidden">unread messages</span>
                </span>
              </Link>
              <Link
                type="button"
                className="btn bg-secondary-subtle rounded-circle position-relative me-3"
                to="/profile"
              >
                <IoMdPerson className="fs-4" />
                
              </Link>
              <Link
                type="button"
                className="btn bg-secondary-subtle rounded-circle position-relative me-3"
                to="/cart"
              >
                <FaShoppingCart className="fs-4 bg-" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                {state.cartItems.length}<span className="visually-hidden">unread messages</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <Link className="nav-item">
                <Link className="nav-link" to="/Aboutus">
                  All Brands
                </Link>
              </Link>

              <li className="nav-item">
                <Link className="nav-link" to="/Discounted">
                  Discounted Products
                </Link>
              </li>
              <div className="dropdown">
                <Link to='/dealer'
                  className="btn  dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dealer Zone
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
 
      
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/like" element={<Like/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/cat/:cid/" element={<Category/>}/>
      
     </Routes>

    </>
  );
}
