import React, { useEffect, useState } from "react";
import MoviesCall from "../../api/MoviesCall";
import "../Popular/Popular.css";
import { MoviesProps } from "../../types/Apptypes";
import { useNavigate } from "react-router-dom";
import { MoviesFilter } from "../MoviesFilter/MoviesFilter";

export const Popular = () => {
  const navigate = useNavigate();
  const [popular, setPopular] = useState<MoviesProps[] | undefined>();

  useEffect(() => {
    MoviesCall.get(
      `/popular?api_key=${process.env.REACT_APP_API_KEY}`,
      {}
    ).then((res) => {
      setPopular(res.data.results);
    });
  }, []);

  return (
    <div className="popular_container">
      {popular &&
        popular.map((item, index) => {
          return (
            <div
              className="popular_movies"
              onClick={() =>
                navigate(
                  `/MovieDetails/${item.id}?api_key=${process.env.REACT_APP_API_KEY}`
                )
              }
            >
              {" "}
              <img
                className="movie_poster"
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt="movie_poster"
              />
              <div className="title">{item.title}</div>
            </div>
          );
        })}
    </div>
  );
};
