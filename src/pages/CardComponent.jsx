import React, { useState, useEffect } from "react";
import "../App.css";

function CardComponent({ season, imageUrls, description }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="card-deck mb-4">
      <div className="card hoverable" style={{ backgroundColor: "whitesmoke" }}>
        <img
          className="card-img-top card-img"
          src={imageUrls}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{season.season} Season Overview</h5>
          <p className="card-text" onClick={handleClick}>
            <small className="text-muted">
              {isClicked ? description : "Click to read more..."}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
export default CardComponent;
