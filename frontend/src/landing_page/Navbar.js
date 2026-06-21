import React from "react";

function Navbar() {
  return (
    
      <nav class="navbar  navbar-expand-lg  border-bottom  " style={{backgroundColor:"#fff"}}>
        <div class="container p-2 ">
          <a class="navbar-brand" href="#">
            <img src="media/images/logo.svg" style={{width:"25%" ,marginLeft:"20%"}} alt="Logo" ></img>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="d-flex " role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
              <li class="nav-item">
                <a class="nav-link active" style={{marginLeft:"10px"}} aria-current="page" href="#">
                  Signup
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" style={{marginLeft:"30px"}} aria-current="page" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" style={{marginLeft:"30px"}} aria-current="page" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" style={{marginLeft:"30px"}} aria-current="page" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" style={{marginLeft:"30px"}} aria-current="page" href="#">
                 Supports
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" style={{marginLeft:"30px"}} aria-current="page" href="#" >
                  <i class="fa-solid fa-bars"></i>
                </a>
              
              </li>
            </ul>
            </form>
          </div>
        </div>
      </nav>
    
 
  );
}

export default Navbar;
