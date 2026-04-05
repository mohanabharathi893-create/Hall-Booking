import React, { useEffect } from "react";
import { typingEffect } from "../components/typingEffect";
import "../components/Typing.css";


function Services(){

    
        useEffect(()=>{
        
        typingEffect(["Services"],"typing6");
        
        },[]);

return(

<section className="container mt-5">

<h2 className="text-center">Our <span id="typing6" className="typing"></span></h2>

<div className="row mt-4">

<div className="col-md-4">

<div className="card">

<img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf" className="card-img-top"/>

<div className="card-body">

<h5>Wedding Planning</h5>

<p>Luxury wedding decorations and planning</p>

</div>

</div>

</div>

<div className="col-md-4">

<div className="card">

<img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3"/>

<div className="card-body">

<h5>Birthday Parties</h5>

<p>Creative birthday themes</p>

</div>

</div>

</div>

<div className="col-md-4">

<div className="card">

<img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"/>

<div className="card-body">

<h5>Corporate Events</h5>

<p>Professional corporate event planning</p>

</div>

</div>

</div>

</div>

</section>

)

}

export default Services;