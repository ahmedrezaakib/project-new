import * as React from 'react';
import { Link,useLocation } from 'react-router'

function Header(){

  const logout=async(e) => {
      try{
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("userdata");
        window.location.href='/login';
      } 
      catch(e){
        console.log(e);
      }
    }
    return(
          <>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
              <div className="container-fluid">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/dashboard"}>Dashboard</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/user"}>User</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/categories"}>Categories</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/brands"}>Brand</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/colour"}>Colour</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/product"}>Product</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/coupon"}>Coupon</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/orders"}>Orders</Link>
                  </li>
                  
                </ul>
                <ul class="d-flex">
                  <li><button onClick={logout} className="btn btn-link text-white" >Logout</button></li>
                </ul>
              </div>
            </nav>
          </>
    )
}


export default Header;