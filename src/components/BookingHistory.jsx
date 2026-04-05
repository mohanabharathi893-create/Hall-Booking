import React, { useEffect } from "react";
import "../components/Booking.css";
import { typingEffect } from "../components/typingEffect";


export default function BookingHistory(){

useEffect(()=>{

typingEffect(["History"],"typing4");

},[]);


const bookings =
JSON.parse(localStorage.getItem("bookings")) || [];

return(

<div
className="history-bg"
>

<div className="history-box">

<h1 className="history-title">
Event Booking <span id="typing4" className="typing"></span>
</h1>

{bookings.length === 0 ? (

<p className="no-booking">
No bookings yet
</p>

) : (

<table className="history-table fixed">

<thead>

<tr>
<th>Customer Name</th>
<th>Phone</th>
<th>Email</th>
<th>Event</th>
<th>Date</th>
<th>Location</th>
<th>Booked Time</th>
</tr>

</thead>

<tbody>

{bookings.map((b,index)=>(

<tr key={index}>

<td>{b.name}</td>
<td>{b.phone}</td>
<td>{b.email}</td>
<td>{b.eventType}</td>
<td>{b.eventDate}</td>
<td>{b.location}</td>
<td>{b.time}</td>

</tr>

))}

</tbody>

</table>

)}

</div>

</div>

);
}