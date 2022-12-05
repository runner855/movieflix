import React, { useEffect, useState } from "react";
import MoviesCall from "../../api/MoviesCall";
import { useNavigate } from "react-router-dom";
import "../TopRated/TopRated.css";
import { MoviesProps } from "../../types/Apptypes";
import { MoviesFilter } from "../MoviesFilter/MoviesFilter";

export const TopRated = () => {
  const navigate = useNavigate();
  const [toprated, setTopRated] = useState<MoviesProps[] | undefined>();
  useEffect(() => {
    MoviesCall.get(
      `/top_rated?api_key=${process.env.REACT_APP_API_KEY}`,
      {}
    ).then((res) => {
      setTopRated(res.data.results);
    });
  }, []);

  console.log(toprated);
  return (
    <div className="toprated_container">
      {toprated &&
        toprated.map((item, index) => {
          return (
            <div
              className="toprated_list"
              onClick={() =>
                navigate(
                  `/MovieDetails/${item.id}?api_key=${process.env.REACT_APP_API_KEY}`
                )
              }
            >
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
