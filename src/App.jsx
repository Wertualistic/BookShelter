import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [search, setSearch] = useState("");
  const [post, setPost] = useState([]);

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBzaZS29N3Y5DP14bD2PVq-gwsjN_R0IfY`
        )
        .then((res) => {
          setPost(res.data.items);
        })
        .catch((err) => console.log(err));
    }
  };



  console.log(post);
  return (
    <div className="App">
      <Header
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
        post={post}
        setPost={setPost}
      />
      <div className="d-flex">
        <Sidebar />
        <Main post={post} />
      </div>
    </div>
  );
}

export default App;
