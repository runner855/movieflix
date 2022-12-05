import React, { useEffect, useState } from "react";
import MoviesCall from "../../api/MoviesCall";
import "../TopRated/TopRated.css";
import { MoviesProps } from "../../types/Apptypes";

export const TopRated = () => {
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
            <div className="toprated_list">
              <img
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
