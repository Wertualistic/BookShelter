import axios from "axios";
import React, { useState } from "react";
import "../styles/Navbar.css";

function Header({ search, setSearch, handleSearch, setPost }) {
  const handleSearchItem = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=newest&key=AIzaSyBzaZS29N3Y5DP14bD2PVq-gwsjN_R0IfY`
      )
      .then((res) => {
        setPost(res.data.items);
      })
      .catch((err) => console.log(err));
  };
  return (
    <header className="w-100">
      <nav className="py-3 px-5 d-flex justify-content-between align-items-center w-100">
        <div className="nav_logo">
          <img src="../../public/assets/Logo.svg" alt="logo" />
        </div>
        <div className="searchBar d-flex w-75">
          <i className="ri-search-line absolute"></i>
          <input
            type="text"
            placeholder="Search books"
            className="input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
        <div>
          <i className="ri-sun-fill sun text-warning"></i>
        </div>
      </nav>
      <div className="d-flex w-100 justify-content-end align-items-center OrderByNewest">
        <div className="d-flex justify-content-between align-items-center w-75 ByNewest">
          <h6>Showing 18 Result(s)</h6>
          <button
            className="btn btn-outline-secondary d-flex align-items-center justify-content-between"
            onClick={handleSearchItem}
          >
            <i className="ri-calendar-line"></i> Order by newest
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
