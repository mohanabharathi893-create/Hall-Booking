import React,{useState} from "react";


export default function AdminDashboard(){

const [bookings,setBookings]=useState(
JSON.parse(localStorage.getItem("eventBookings")) || []
);

const deleteBooking=(index)=>{

const updated=bookings.filter((_,i)=>i!==index);

setBookings(updated);

localStorage.setItem(
"eventBookings",
JSON.stringify(updated)
);

};

return(

<div className="admin-container">

<h2>Admin Dashboard</h2>

<table>

<thead>

<tr>
<th>Name</th>
<th>Event</th>
<th>Date</th>
<th>Action</th>
</tr>

</thead>

<tbody>

{bookings.map((b,index)=>(

<tr key={index}>

<td>{b.name}</td>
<td>{b.event}</td>
<td>{b.date}</td>

<td>

<button
className="delete-btn"
onClick={()=>deleteBooking(index)}
>

Delete

</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

);
}