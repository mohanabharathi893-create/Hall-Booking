import React, { useState } from "react";
import "./BookingPage.css";

export default function BookingForm() {

const [form,setForm] = useState({
name:"",
event:"",
date:""
});

const [showPopup,setShowPopup] = useState(false);

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const handleSubmit=()=>{

if(!form.name || !form.event || !form.date){
alert("Fill all fields");
return;
}

const eventImages={
Wedding:"/images/wedding.jpg",
Birthday:"/images/birthday.jpg",
Corporate:"/images/corporate.jpg"
};

const newBooking={
...form,
image:eventImages[form.event],
time:new Date().toLocaleString()
};

const bookings=
JSON.parse(localStorage.getItem("eventBookings")) || [];

bookings.push(newBooking);

localStorage.setItem("eventBookings",JSON.stringify(bookings));

setShowPopup(true);

setTimeout(()=>{
setShowPopup(false);
},2500);

};

return(

<div className="booking-container">

<h2>Book Event</h2>

<input
name="name"
placeholder="Customer Name"
onChange={handleChange}
/>

<select name="event" onChange={handleChange}>

<option value="">Select Event</option>
<option value="Wedding">Wedding</option>
<option value="Birthday">Birthday</option>
<option value="Corporate">Corporate</option>

</select>

<input
type="date"
name="date"
onChange={handleChange}
/>

<button onClick={handleSubmit}>
Book Event
</button>


{showPopup && (

<div className="success-popup">
🎉 Event Successfully Booked
</div>

)}

</div>

);
}