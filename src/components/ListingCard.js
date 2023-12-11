import React, {useState, useEffect} from "react";

function ListingCard({listing, onHandleDelete}) {
  const [isFavorited, setIsFavorited] = useState(false);
  
  function favorited() {
    setIsFavorited(!isFavorited);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button 
            onClick={favorited} 
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button 
            onClick={favorited} 
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button 
          onClick={() => onHandleDelete(listing.id)}
          className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
