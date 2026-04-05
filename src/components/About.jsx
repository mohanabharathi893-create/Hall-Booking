import React, { useEffect } from "react";
import "./About.css";
import { typingEffect } from "../components/typingEffect";


export default function About(){

    useEffect(()=>{
        
        typingEffect(["DreamCraft Events"],"typing9");
    
        
        },[]);

return(

<div className="about-page">

{/*  HERO */}
<div className="about-hero">

<h1>About <span id="typing9" className="typing"></span></h1>

<p>
Turning your special moments into unforgettable experiences
</p>

</div>

{/*  CONTENT */}

<div className="about-content">

<h2>Who We Are</h2>

<p>
DreamCraft Events is a passionate event management company dedicated to
creating memorable and elegant experiences. From intimate celebrations
to grand occasions, we specialize in planning and executing events with
perfection and creativity.
</p>

<h2>What We Do</h2>

<p>
We organize a wide range of events including engagements, weddings,
birthday parties, and corporate events. Our team ensures every detail
is handled with care – from stage decoration to venue selection,
catering, and entertainment.
</p>

<h2>Our Mission</h2>

<p>
Our mission is to bring your dreams to life by crafting events that
reflect your style and personality. We focus on quality, innovation,
and customer satisfaction.
</p>

<h2>Why Choose Us?</h2>

<ul className="nav-item">
<li className="nav-link">✔ Creative & Unique Designs</li>
<li className="nav-link">✔ Professional Team</li>
<li className="nav-link">✔ Affordable Packages</li>
<li className="nav-link">✔ End-to-End Event Solutions</li>
</ul>

</div>

</div>

);

}