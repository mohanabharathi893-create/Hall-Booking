import React, { useState } from "react";
import "./Signin.css";

export default function Signin(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

// LOGIN
const handleLogin = () => {

if(email && password){

const user = { email };
localStorage.setItem("user", JSON.stringify(user));

alert("Login Successful");

// redirect
window.location.href = "/";

}else{
alert("Enter all fields");
}

};

return(

<div className="auth-container">

<div className="auth-box">

<h2>Sign In</h2>

<input
type="email"
placeholder="Enter Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Enter Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="signin-btn" onClick={handleLogin}>
Sign In
</button>

</div>

</div>

);

}