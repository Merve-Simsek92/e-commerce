import React, { useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { AuthContext } from "../context/AuthContext";
import {ReactComponent as PersonIcon}  from "../helpers/person.svg"
import {ReactComponent as CartIcon}  from "../helpers/cart.svg"
import { Dropdown } from 'react-bootstrap'
import { useBasket } from "../context/BasketContext";
const Navbar = () => {
    const navigate=useNavigate();
   const {items} =useBasket();
    
 const { currentUser } = useContext(AuthContext);
// const currentUser=false
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-primary">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand text-white">
            
            <h4>Beyaz Eşya e-Ticaret Sitesi</h4>
          </Link>
          <div className="d-flex text-white align-items-center">
            <h5 className="mb-0 text-capitalize">     {currentUser?.displayName} </h5>
         {currentUser ?  (<div className="d-flex text-white align-items-center">
          <h5 className="m-3 text-capitalize ">
          {items.length > 0 && (
            <Link to="/shoppingCard">
              <button onClick={()=>navigate("/shoppingCart")}><CartIcon /> ({items.length})</button>
            </Link>
           ) }
          </h5>
            <h5 className="mb-0 text-capitalize">
            
                <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    <PersonIcon/>
  </Dropdown.Toggle>

  <Dropdown.Menu>
  
    <Dropdown.Item onClick={()=>logOut()} >Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</h5> </div>
):
          (
            <h5 className="mb-0 text-capitalize">
            {/* {currentUser?.displayName} */}
            <Dropdown>
<Dropdown.Toggle variant="success" id="dropdown-basic">
<PersonIcon/>
</Dropdown.Toggle>

<Dropdown.Menu>
<Dropdown.Item  onClick={()=>navigate("/login")}>Login</Dropdown.Item>
<Dropdown.Item  onClick={()=>navigate("/register")}>Register</Dropdown.Item>
</Dropdown.Menu>
</Dropdown> </h5>
          
          )}


          </div>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
