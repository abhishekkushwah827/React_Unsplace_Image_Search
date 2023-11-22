import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./Home.css";
import axios from "axios";
import { API_URL } from "../utils/Constant";

const Home = () => {
  const [imagesList, setImageList] = useState([]);
  const [category, setCategory] = useState("mountain");
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const debouncedSearch = setTimeout(() => {
        getImages(searchInput);
    }, 500);
    return () => clearTimeout(debouncedSearch);
  }, [searchInput]);

  const getImages = async (query) => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}&query=${query || "mountain"}`);
      console.log("getImages Response:::",query, response.data);
      setImageList(response.data.results);
    } catch (error) {
      console.error("getImages Error:::", error);
    }
    setLoading(false);
  };

  const changeCategoryHandler=(category)=>{
      setCategory(category);
      getImages(category);
  }
  
  return (
    <>
      <Header />
      <div className="home">
        <div className="home__search_section">
          <div className="home__search">
              <input type="text" placeholder="Type something to search..." onChange={e=>setSearchInput(e.target.value)}/>
          </div>
          <div className="home__categories">
            <button
              className={category === "mountain"?"active":""}
              onClick={() => changeCategoryHandler("mountain")}
            >
              Mountain
            </button>
            <button
              className={category === "beaches"?"active":""}
              onClick={() => changeCategoryHandler("beaches")}
            >
              Beaches
            </button>
            <button
              className={category === "birds"?"active":""}
              onClick={() => changeCategoryHandler("birds")}
            >
              Birds
            </button>
            <button
              className={category === "food"?"active":""}
              onClick={() => changeCategoryHandler("food")}
            >
              Food
            </button>
          </div>
        </div>
        <div className="home__images">
        {loading ? (
        <p className='loading'>Loading...</p>
      ) : (
        imagesList.map((image) => (
          <img key={image.id} className="home__image" src={image.urls.full} alt="" />
        ))
      )}
        </div>
      </div>
    </>
  );
};

export default Home;
