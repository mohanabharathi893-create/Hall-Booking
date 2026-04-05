import React, { useState,useEffect } from "react";
import "../components/Booking.css";
import { useNavigate } from "react-router-dom";
import { typingEffect } from "../components/typingEffect";

export default function BookingPage() {

useEffect(()=>{

typingEffect(["Event"],"typing5");

},[]);


const navigate = useNavigate();

const [form,setForm] = useState({
name:"",
phone:"",
email:"",
eventType:"",
eventDate:"",
location:"",
message:""
});

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const handleSubmit=()=>{

const {name,phone,email,eventType,eventDate,location}=form;

if(!name || !phone || !email || !eventType || !eventDate || !location){
alert("Please fill all required fields");
return;
}

const booking = {
...form,
time:new Date().toLocaleString()
};

const existingBookings =
JSON.parse(localStorage.getItem("bookings")) || [];

existingBookings.push(booking);

localStorage.setItem("bookings",JSON.stringify(existingBookings));

alert("🎉 Event Successfully Booked");

navigate("/booking-history");

};

return(

<div className="booking-bg">

<div className="booking-box">

<h2>Book Your <span id="typing5" className="typing"></span></h2>

<input
name="name"
placeholder="Customer Name"
onChange={handleChange}
/>

<input
name="phone"
placeholder="Phone Number"
onChange={handleChange}
/>

<input
type="email"
name="email"
placeholder="Email Address"
onChange={handleChange}
/>

<select
name="eventType"
onChange={handleChange}
>

<option value="">Select Event</option>
<option>Wedding</option>
<option>Birthday</option>
<option>Corporate Event</option>
<option>Engagement</option>

</select>

<input
type="date"
name="eventDate"
onChange={handleChange}
/>

<input
name="location"
placeholder="Event Location"
onChange={handleChange}
/>

<textarea
name="message"
placeholder="Additional Message"
rows="3"
onChange={handleChange}
/>

<button onClick={handleSubmit}>
Book Event
</button>

</div>

</div>

);

}