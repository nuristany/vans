import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import vanData from "./vanData";

function Vans() {
  const [vanlist, setvanList] = useState(vanData);

  const myVans = vanlist.map((van) => (
    <div className="van" key={van.id}>
      {/* Wrap the image in a Link component */}
      <Link to={`/vans/${van.id}`}>
        <img className="van-images" src={van.image} alt={van.name} />
      </Link>
      <h4>{van.name}</h4>
      <p style={{ fontWeight: "bold", fontSize: "12px" }}>Price: ${van.price}</p>
    </div>
  ));

  return (
    <div>
    
      <div className="vans-container">
        {/* Render the vans */}
        {myVans}
      </div>
    </div>
  );
}

export default Vans;
