import React, { useEffect } from "react";
import "../components/Packages.css";
import { typingEffect } from "../components/typingEffect";

export default function PackagesPage() {
    
    useEffect(()=>{
    
    typingEffect(["Packages"],"typing6");

    
    },[]);

const events = [
{
title: "Engagement functions",
packages: [
{ name: "Basic", price: "₹20,000", features: ["Simple Decor", "Lighting", "Photography"] },
{ name: "Premium", price: "₹40,000", features: ["Floral Decor", "DJ", "Photography + Video"] },
{ name: "Royal", price: "₹80,000", features: ["Luxury Stage", "Live Music", "Drone Shoot"] }
]
},
{
title: "Wedding events",
packages: [
{ name: "Basic", price: "₹50,000", features: ["Stage Decor", "Lighting", "Photography"] },
{ name: "Premium", price: "₹1,00,000", features: ["Luxury Decor", "DJ", "Photo + Video"] },
{ name: "Royal", price: "₹2,00,000", features: ["Grand Setup", "Live Band", "Drone Coverage"] }
]
},
{
title: "Birthday Celebration Events",
packages: [
{ name: "Basic", price: "₹10,000", features: ["Balloon Decor", "Cake Table", "Photos"] },
{ name: "Premium", price: "₹25,000", features: ["Theme Decor", "DJ", "Photos + Video"] },
{ name: "Royal", price: "₹50,000", features: ["Cartoon Theme", "Games", "Full Coverage"] }
]
},
{
title: "Corporate Events",
packages: [
{ name: "Basic", price: "₹30,000", features: ["Stage Setup", "Mic System", "Photos"] },
{ name: "Premium", price: "₹70,000", features: ["LED Screen", "DJ", "Video"] },
{ name: "Royal", price: "₹1,50,000", features: ["Full Setup", "Live Streaming", "Drone"] }
]
}
];

return (

<div className="packages-bg">

{/* Heading Section */}
<div className="packages-header">
<h1>Our Event <span id="typing6" className="typing"></span></h1>
<p>Choose the perfect package for your special occasion</p>
</div>

{/* Event Sections */}
{events.map((event, i) => (

<div key={i} className="event-section">

<h2 className="event-title fade-in">{event.title}</h2>

<div className="card-container">

{event.packages.map((pkg, index) => (

<div className="package-card" key={index}>

<h3>{pkg.name} Package</h3>
<h4>{pkg.price}</h4>

{pkg.features.map((f, i) => (
<p key={i}>✔ {f}</p>
))}

<button>Select</button>

</div>

))}

</div>

</div>

))}

</div>

);

}