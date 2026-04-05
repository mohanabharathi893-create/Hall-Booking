import React, { useEffect } from "react";
import { typingEffect } from "../components/typingEffect";
import "./Gallery.css";

export default function GalleryPage(){

    useEffect(()=>{
        
        typingEffect([" Gallery"],"typing8");
    
        
        },[]);

const galleryData = [
{
title:"Engagement",
images:[
"src/assets/engagementG1.jpg",
"src/assets/engagementG2.jpg",
"src/assets/engagementG3.jpg",
"src/assets/engagementG4.jpg",
"src/assets/engagementG5.jpg",
"src/assets/engagementG6.jpg",
"src/assets/engagementG7.jpg",
"src/assets/engagementG8.jpg"
]
},
{
title:"Wedding",
images:[
"src/assets/weddingG1.jpg",
"src/assets/weddingG2.jpg",
"src/assets/weddingG3.jpg",
"src/assets/weddingG4.jpg",
"src/assets/weddingG5.jpg",
"src/assets/weddingG6.jpg",
"src/assets/weddingG7.jpg",
"src/assets/weddingG8.jpg"
]
},
{
title:"Birthday",
images:[
"src/assets/birthdayG1.jpg",
"src/assets/birthdayG2.jpg",
"src/assets/birthdayG3.jpg",
"src/assets/birthdayG4.jpg",
"src/assets/birthdayG5.jpg",
"src/assets/birthdayG6.jpg",
"src/assets/birthdayG7.jpg",
"src/assets/birthdayG8.jpg"
]
},
{
title:"Corporate",
images:[
"src/assets/corporateG1.jpg",
"src/assets/corporateG2.jpg",
"src/assets/corporateG3.jpg",
"src/assets/corporateG4.jpg",
"src/assets/corporateG5.jpg",
"src/assets/corporateG6.jpg",
"src/assets/corporateG7.jpg",
"src/assets/corporateG8.jpg"
]
}
];

return(

<div className="gallery-page">

{/*  HERO */}
<div className="gallery-hero">
<h1>Event <span id="typing8" className="typing"></span></h1>
<p>Explore our beautiful moments & unforgettable celebrations</p>
</div>

{/* GALLERY */}
{galleryData.map((event,index)=>(

<div key={index} className="gallery-section">

<h2>{event.title} Events</h2>

<div className="gallery-grid">

{event.images.map((img,i)=>(

<div className="gallery-card" key={i}>
<img src={img} alt="gallery"/>
</div>

))}

</div>

</div>

))}

</div>

);

}