import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header className="bg-white text-black d-flex justify-content-between align-items-center p-3">
      <h1 style={{ fontSize: "24px" }}>SEARCH APP FOR RESTAURANTS</h1>
      <div>
        <button className="btn btn-secondary mx-2">Explore</button>
        <button className="btn btn-danger mx-2">Sign In</button>
      </div>
    </header>
  );
};

export default Header;
