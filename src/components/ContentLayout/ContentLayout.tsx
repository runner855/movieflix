import React from "react";
import { MoviesProps } from "../../types/Apptypes";
import { useNavigate } from "react-router-dom";
import "../ContentLayout/ContentLayout.css";

type ContentLayoutProps = {
  movies: MoviesProps[] | undefined;
  language: string | undefined;
  value: string;
  vote: boolean;
};

export const ContentLayout = ({
  movies,
  language,
  value,
  vote,
}: ContentLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="upcoming_container">
      <div className="data">
        {movies &&
          movies
            .filter((item) =>
              item.title.toLowerCase().includes(value.toLowerCase())
            )
            .filter((item) => item.original_language === language)
            .sort((a, b) => (vote && a.vote_average > b.vote_average ? -1 : 1))

            .map((item, index) => {
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
