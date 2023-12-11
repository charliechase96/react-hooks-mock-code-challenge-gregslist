import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [originalListings, setOriginalListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(response => response.json())
    .then(data => {
      setListings(data)
      setOriginalListings(data)})
  }, [])

  return (
    <div className="app">
      <Header 
        listings={listings} 
        setListings={setListings} 
        originalListings={originalListings} 
      />
      <ListingsContainer 
        listings={listings} 
        setListings={setListings} 
      />
    </div>
  );
}

export default App;
