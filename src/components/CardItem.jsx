import React from "react";
import "../styles/CardItem.css";

function CardItem({ selectedItem, setOpen }) {
  return (
    <div className="wrapper">
      <div className="cardItem d-flex flex-column align-items-center justify-content-center bg-white px-5">
        <div className="top d-flex justify-content-between align-items-center">
          <h3>{selectedItem.volumeInfo.title.slice(0, 7)}...</h3>
          <i className="ri-close-line" onClick={() => setOpen(false)}></i>
        </div>
        <img src={selectedItem.volumeInfo.imageLinks.thumbnail} alt="" />
        <div className="texts">
          <p>{selectedItem.volumeInfo.description.slice(0, 1000)}</p>
          <div className="aboutBook">
            <div className="d-flex align-items-start pt-5 gap-3">
              <h6>Author: </h6>
              <p> {selectedItem.volumeInfo.authors[0]}</p>
            </div>
            <div className="d-flex align-items-start pt-2 gap-3">
              <h6>Published: </h6>
              <p> {selectedItem.volumeInfo.publishedDate}</p>
            </div>
            <div className="d-flex align-items-start pt-2 gap-3">
              <h6>Publisher: </h6>
              <p> {selectedItem.volumeInfo.publisher}</p>
            </div>
            <div className="d-flex align-items-start pt-2 gap-3">
              <h6>Categories: </h6>
              <p> {selectedItem.volumeInfo.categories}</p>
            </div>
            <div className="d-flex align-items-start pt-2 gap-3">
              <h6>Pages Count: </h6>
              <p> {selectedItem.volumeInfo.pageCount}</p>
            </div>
          </div>
        </div>
        <div className="btnSm">
          <button className="btn btn-secondary"><a href={selectedItem.volumeInfo.infoLink}>Read</a></button>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
