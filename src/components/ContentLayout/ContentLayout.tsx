import React from "react";
import { MoviesProps } from "../../types/Apptypes";
import { useNavigate, useParams } from "react-router-dom";
import "../ContentLayout/ContentLayout.css";

type ContentLayoutProps = {
  movies: MoviesProps[] | undefined;
};

export const ContentLayout = ({ movies }: ContentLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="upcoming_container">
      <div className="data">
        {movies &&
          movies.map((item, index) => {
            return (
              <div
                key={index}
                className="movies_list"
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
                <div className="vote">{item.vote_average}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
