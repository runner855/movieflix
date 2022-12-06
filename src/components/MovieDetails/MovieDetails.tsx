import React, { useEffect, useState } from "react";
import "../MovieDetails/MovieDetails.css";
import MoviesCall from "../../api/MoviesCall";
import { useParams } from "react-router-dom";
import { MoviesProps } from "../../types/Apptypes";
import moment from "moment";

export const MovieDetails = () => {
  const [details, setDetails] = useState<MoviesProps | undefined>();
  const params = useParams();
  useEffect(() => {
    params.id &&
      MoviesCall.get(
        `${params.id}?api_key=${process.env.REACT_APP_API_KEY}`,
        {}
      ).then((res) => {
        setDetails(res.data);
      });
  }, [params]);

  const averageVote =
    details && (Math.round(details.vote_average * 100) / 100).toFixed(1);

  console.log("details", details);
  return (
    <div>
      {details && (
        <div className="movie_card" id="bright">
          <div className="info_section">
            <div className="movie_header">
              <img
                alt="locandina"
                className="locandina"
                src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
              />
              <h1>{details.title}</h1>
              <h4>{moment(details.release_date).format("YYYY")}</h4>
              <span className="language">
                {details.original_language.toUpperCase()}
              </span>
              <span className="ratings_avg">
                {averageVote === "0.0" ? "0" : averageVote}
              </span>

              <div className="Stars"></div>
            </div>
            <div className="movie_desc">
              <p className="text">{details.overview}</p>
            </div>
          </div>
          <div
            className="blur_back bright_back"
            style={{
              backgroundImage: `url(${`https://image.tmdb.org/t/p/w500${details.backdrop_path}`})`,
            }}
          ></div>
        </div>
      )}
    </div>
  );
};
