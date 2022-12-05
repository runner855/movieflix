import React, { useEffect, useState } from "react";
import MoviesCall from "../../api/MoviesCall";
import { MoviesProps } from "../../types/Apptypes";
import "../Upcoming/Upcoming.css";

export const Upcoming = () => {
  const [upcoming, setUpcoming] = useState<MoviesProps[] | undefined>();

  useEffect(() => {
    MoviesCall.get(
      `/upcoming?api_key=${process.env.REACT_APP_API_KEY}`,
      {}
    ).then((res) => {
      setUpcoming(res.data.results);
    });
  }, []);
  console.log("upcoming", upcoming);
  return (
    <div className="upcoming_container">
      {upcoming &&
        upcoming.map((item, index) => {
          return (
            <div className="movies_list">
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
