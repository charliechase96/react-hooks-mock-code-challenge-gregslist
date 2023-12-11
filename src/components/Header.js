import React from "react";
import Search from "./Search";

function Header({listings, setListings, originalListings}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
        listings={listings} 
        setListings={setListings} 
        originalListings={originalListings}
      />
    </header>
  );
}

export default Header;
