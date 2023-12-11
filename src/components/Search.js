import React, { useState } from "react";

function Search({ listings, setListings, originalListings }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value === "") {
      setListings(originalListings);
    } else {
      const filteredListings = originalListings.filter((listing) =>
        listing.description.toLowerCase().includes(value.toLowerCase())
      );
      setListings(filteredListings);
    }
  };

  return (
    <form className="searchbar" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
