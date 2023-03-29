import React from "react";
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="w-25 sidebar h-100 p-4">
      <h2>Bookmarks</h2>
      <p>If you don’t like to read, you haven’t found the right book</p>
      <div className="items d-flex flex-column">
        <div className="item d-flex p-3 align-items-center justify-content-between">
          <div className="info d-flex flex-column">
            <h5>Python</h5>
            <p>David M. Beazley</p>
          </div>
          <div className="d-flex">
            <i className="ri-book-open-line"></i>
            <i className="ri-delete-back-2-line"></i>
          </div>
        </div>
        <div className="item d-flex p-3 align-items-center justify-content-between">
          <div className="info d-flex flex-column">
            <h5>Java</h5>
            <p>David M. Beazley</p>
          </div>
          <div className="d-flex">
            <i className="ri-book-open-line"></i>
            <i className="ri-delete-back-2-line"></i>
          </div>
        </div>
        <div className="item d-flex p-3 align-items-center justify-content-between">
          <div className="info d-flex flex-column">
            <h5>C++</h5>
            <p>David M. Beazley</p>
          </div>
          <div className="d-flex">
            <i className="ri-book-open-line"></i>
            <i className="ri-delete-back-2-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
