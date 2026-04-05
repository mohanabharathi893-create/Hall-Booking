import React, { useEffect } from "react";
import "../components/HeroSlider.css"; 
import { typingEffect } from "../components/typingEffect";

function HeroSlider(){

    useEffect(()=>{
    
    typingEffect(["Wedding Celebration"],"typing1");
    typingEffect(["Corporate Events"],"typing2");
    typingEffect(["Birthday Celebrations"],"typing3")
    
    },[]);

return(

<div id="heroSlider" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
   
    <div class="carousel-indicators">
        
        <button type="button" data-bs-target="#heroSlider" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#heroSlider" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#heroSlider" data-bs-slide-to="2"></button>
        </div> 
 <div className="carousel-inner">

<div className="carousel-item active ">

<img
src="src/assets/wedding.jpg"
className=" hero-slide d-block w-100 slider-img"
/>

<div className="carousel-caption">
   <div className="hero-hoverlay fade-in">
     <div className="container text-center hero-content">
        <h1 className="hero-title">Dream<span id="typing1" className="typing"></span></h1>
           
           <h4 className="hero-h4 ">Dream Weddings • Grand Celebrations • Perfect Moments</h4>

           <p className="hero-subtitle">Create magical unforgettable wedding memories with beautiful decorations and perfect planning.</p>

                <div className="hero-buttons">
                   <button className="btn btn-danger hero-btn me-3">View More</button>
                   <button className="about-btn" onClick={()=>window.open("/about", "_blank")}>
                   About Us
                   </button>
                </div>
      </div>
   </div>
    



</div>

</div>

<div className="carousel-item">

<img
src="src/assets/corporate.jpg"
className="hero-slide d-block w-100 slider-img"
/>

<div className="carousel-caption">

  <div className="hero-hoverlay">
    <div className="container text-center hero-content">
        <h1 className="hero-title">Profesional <span id="typing2" className="typing"></span></h1>

            <h4 className="hero-h4 ">Smart Planning • Business Excellence • Grand Conferences</h4>

          <p className="hero-subtitle">Organizing successful corporate meetings, conferences and business celebrations.</p>
          
          <div className="hero-buttons">
              <button className="btn btn-danger hero-btn me-3">Explore</button>
              <button className="about-btn" onClick={()=>window.open("/about", "_blank")}>
              About Us
              </button>
          </div>

    </div>

  </div>

</div>

</div>


<div className="carousel-item">

<img
src="src/assets/birthday.jpg"
className="hero-slide d-block w-100 slider-img"
/>

<div className="carousel-caption">

  <div className="hero-hoverlay">
    <div className="container text-center hero-content">
        <h1 className="hero-title">Joyful <span id="typing3" className="typing"></span></h1>

        <h4 className="hero-h4 ">Fun Themes • Colorful Decor • Happy Celebrations</h4>

          <p className="hero-subtitle">Celebrate your special moments and Make every birthday special with creative themes and exciting party decorations.</p>
          
          <div className="hero-buttons">
              <button className="btn btn-danger hero-btn me-3">Book Now</button>
              <button className="about-btn" onClick={()=>window.open("/about", "_blank")}>
              About Us
              </button>
          </div>

    </div>

  </div>

</div>

</div>

{/* Previous Button */}

<button className="carousel-control-prev" type="button" data-bs-target="#heroSlider" data-bs-slide="prev">

<span className="carousel-control-prev-icon"></span>

</button>


{/* Next Button */}

<button className="carousel-control-next" type="button" data-bs-target="#heroSlider" data-bs-slide="next">

<span className="carousel-control-next-icon"></span>

</button>

</div>
</div>

)

}

export default HeroSlider;