import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar(){

const navigate = useNavigate();

// STATE
const [user, setUser] = useState(null);

//  LOAD USER
useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  setUser(storedUser);
}, []);

//  LOGOUT
const handleLogout = () => {
  localStorage.removeItem("user");
  window.location.href = "/"; // refresh
};

return(

<nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">

<div className="container">

<Link className="navbar-brand" to="/">
<img src="src/assets/title icon.png" alt="logo" width={100}/>
</Link>

<div className="collapse navbar-collapse justify-content-center">

<ul className="navbar-nav ms-auto">

<li className="nav-item">
<Link to="/" className="nav-link custom-link">Home</Link>
</li>

<li className="nav-item">
<Link to="/gallery" className="nav-link custom-link">Gallery</Link>
</li>

<li className="nav-item">
<Link to="/packages" className="nav-link custom-link">Packages</Link>
</li>

<li className="nav-item">
<Link to="/booking" className="nav-link custom-link">Booking</Link>
</li>

<li className="nav-item">
<Link to="/history" className="nav-link custom-link">History</Link>
</li>

</ul>

</div>

{/*  SIGNIN / SIGNOUT BUTTON */}

{user ? (

<button className="btn logout-btn" onClick={handleLogout}>
Sign Out
</button>

) : (

<button className="btn login-btn" onClick={()=>navigate("/signin")}>
Sign In
</button>

)}

</div>

</nav>

);

}

export default Navbar;