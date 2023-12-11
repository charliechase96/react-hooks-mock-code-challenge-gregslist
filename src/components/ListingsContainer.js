import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, setListings, setOriginalListings}) {

  function handleDelete(listingId) {
    fetch(`http://localhost:6001/listings/${listingId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setListings(listings.filter(listing => listing.id !== listingId));
      }
    })
  }

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
        <ListingCard 
          listing={listing}
          key={listing.id}
          onHandleDelete={handleDelete} 
        />))} 
      </ul>
    </main>
  );
}

export default ListingsContainer;
