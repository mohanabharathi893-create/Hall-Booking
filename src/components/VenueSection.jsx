import React, { useEffect } from "react";
import { typingEffect } from "../components/typingEffect";
import "./Venue.css";




export default function VenueSection(){
    
    useEffect(()=>{
        
        typingEffect([" Meet Flavors"],"typing10");
    
        
        },[]);

const venueData = [
{
title:"Engagement",
images:[
"src/assets/engagementV1.jpg",
"src/assets/engagementV2.jpg",
"src/assets/engagementV3.jpg",
"src/assets/engagementV4.jpg"
]
},
{
title:"Wedding",
images:[
"src/assets/weddingV1.jpg",
"src/assets/weddingV2.jpg",
"src/assets/weddingV3.jpg",
"src/assets/weddingV4.jpg"
]
},
{
title:"Birthday",
images:[
"src/assets/birthdayV1.jpg",
"src/assets/birthdayV2.jpg",
"src/assets/birthdayV3.jpg",
"src/assets/birthdayV4.jpg"
]
},
{
title:"Corporate",
images:[
"src/assets/corporateV1.jpg",
"src/assets/corporateV2.jpg",
"src/assets/corporateV3.jpg",
"src/assets/corporateV4.jpg"
]
}
];

return(

<div className="venue-section">

<h2 className="venue-main-title">Where Moments <span id="typing10" className="typing"></span></h2>

{venueData.map((event,index)=>(

<div key={index} className="venue-block">

<h3 className="venue-title">{event.title}</h3>

<div className="venue-grid">

{event.images.map((img,i)=>(

<div className="venue-card" key={i}>

<img src={img} alt="venue"/>

<div className="venue-overlay">
<h4>{event.title}</h4>
</div>

</div>

))}

</div>

</div>

))}

</div>

);

}