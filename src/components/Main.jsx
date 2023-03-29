import React, { useState } from "react";
import "../styles/Main.css";
import CardItem from "./CardItem";

function Main({ post = [] }) {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  function handleItemClick(item) {
    setOpen(true)
    setSelectedItem(item);
    console.log(item);
  }
  console.log(selectedItem)
  return (
    <div className="main">
      <div className="d-flex align-items-start justify-content-center w-100 wrapperContainer">
      <div className="itms d-flex flex-wrap justify-content-center align-items-start tele">
        {post.map((item) => {
          return (
            <>
              <div className="itm" key={item.id}>
                <img
                  src={item.volumeInfo.imageLinks.thumbnail}
                  alt={item.volumeInfo.title}
                />
                <div className="text d-flex flex-column justify-content-center align-items-start w-100">
                  <h6>{item.volumeInfo.title.slice(0, 27)}</h6>
                  <p>{item.volumeInfo.authors[0]}</p>
                  <p>{item.volumeInfo.publishedDate}</p>
                </div>
                <div className="btns d-flex gap-3">
                  <button className="btn btn-warning text-dark">
                    Bookmark
                  </button>
                  <button
                    className="btn btn-info text-primary"
                    onClick={() => handleItemClick(item)}
                  >
                    More Info
                  </button>
                </div>
                <button className="btn btn-secondary w-100 mt-2"><a href={item.volumeInfo.infoLink}>Read</a></button>
              </div>
            </>
          );
        })}
        {open ? <CardItem setOpen={setOpen} selectedItem={selectedItem} /> : null}
      </div>
    </div>
    </div>
  );
}

export default Main;
