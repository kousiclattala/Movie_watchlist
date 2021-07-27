import React, { useState } from "react";
import { searchMovie } from "../utils/movieService";
import MovieCard from "./MovieCard";

const SearchMovie = () => {
  const [movie, setMovie] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (movie === "") {
      return alert("Please enter search query");
    }

    try {
      const { data } = await searchMovie(movie);
      console.log("Movie Details", data);
      const { results } = data;
      setData(results);
    } catch (error) {
      console.log("Error while Searching Movie", error);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-nav bg-dark">
        <form onSubmit={handleSearch}>
          <div className="input-group">
            <input
              type="text"
              className="form-control w-50"
              placeholder="Search the movie here"
              value={movie}
              onChange={(e) => setMovie(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
      </nav>
      <div className="text-white mt-3">
        {data.map((res) => (
          <MovieCard data={res} key={res.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchMovie;
