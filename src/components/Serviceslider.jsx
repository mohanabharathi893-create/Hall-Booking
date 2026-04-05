import React, { useEffect } from "react";
import { typingEffect } from "../components/typingEffect";
import "./Slider.css";

export default function ServicesSection(){

     useEffect(()=>{
            
            typingEffect(["Decorations"],"typing7");
            
            },[]);

const services = [
{
title:"Engagement stage Decoration",
images:[
"src/assets/engagementS1.jpg",
"src/assets/engagementS2.jpg",
"src/assets/engagementS3.jpg",
"src/assets/engagementS4.jpg"
]
},
{
title:"Wedding stage Decoration",
images:[
"src/assets/weddingS1.jpg",
"src/assets/weddingS2.jpg",
"src/assets/weddingS3.jpg",
"src/assets/weddingS4.jpg"
]
},
{
title:"Birthday stage Decoration",
images:[
"src/assets/birthdayS1.jpg",
"src/assets/birthdayS2.jpg",
"src/assets/birthdayS3.jpg",
"src/assets/birthdayS4.jpg"
]
},
{
title:"Corporate Event stage Decoration",
images:[
"src/assets/corporateS1.jpg",
"src/assets/corporateS2.jpg",
"src/assets/corporateS3.jpg",
"src/assets/corporateS4.jpg"
]
}
];

return(

<div className="services-section">

<h2 className="main-title">Stage <span id="typing7" className="typing"></span></h2>

{services.map((event,index)=>(

<div key={index} className="event-block">

<h3 className="event-title">{event.title}</h3>

<div className="image-grid">

{event.images.map((img,i)=>(

<div className="img-card" key={i}>

<img src={img} alt="event"/>

</div>

))}

</div>

</div>

))}

</div>

);

}