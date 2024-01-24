import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import vanData from "./vanData";
import Navbar from "./Navbar";

function VanDetails() {
  
  const { id } = useParams();
  const [vanDetails, setVanDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const foundVan = vanData.find((van)=> van.id === id)

    
    if (foundVan) {
      setVanDetails(foundVan);
    }
    
    setLoading(false);
  }, [id]);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!vanDetails) {
    return <div>Van details not found.</div>;
  }
  
  return (
    <div>
      
      <Link to="/vans">Back to all vans</Link>
      <div className="van-detail">
        <img className="van-detail-image" src={vanDetails.image} alt={vanDetails.name} />
        <h2>{vanDetails.name}</h2>
       
        <p style={{ fontWeight: "bold", fontSize: "14px" }}>Price: <span>${vanDetails.price}</span></p>
        <p style={{width:"400px"}}>{vanDetails.description}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
}

export default VanDetails;

// const foundVan = vanData.find((van) => {
//   return van.id === parseInt(id, 10) || van.id.toString() === id;

// });