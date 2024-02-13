import React, { useEffect, useState } from "react";
import axios from "../../Utils/Axios";
import requests from "../../Utils/Requests";
import "./banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        const randomIndex = Math.floor(Math.random() * response.data.results.length);
        setMovie(response.data.results[randomIndex]);
      } catch (error) {
        console.log("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, []);

  const truncate = (str, maxLength) => {
    return str?.length > maxLength ? `${str.substr(0, maxLength - 1)}...` : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
