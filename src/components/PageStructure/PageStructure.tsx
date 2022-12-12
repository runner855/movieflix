import React, { useEffect, useState } from "react";
import MoviesCall from "../../api/MoviesCall";
import { MoviesProps } from "../../types/Apptypes";
import "../PageStructure/PageStructure.css";
import { useParams } from "react-router-dom";
import { MoviesFilter } from "../MoviesFilter/MoviesFilter";
import { ContentLayout } from "../ContentLayout/ContentLayout";
import { Button, Select } from "antd";
import Item from "antd/es/list/Item";

export const PageStructure = () => {
  const params = useParams();

  const [movies, setMovies] = useState<MoviesProps[] | undefined>();
  const [value, setValue] = useState<string>("");
  const [results, setResults] = useState<MoviesProps[] | undefined>();
  const [language, setLanguage] = useState<string>();
  const [movielanguage, setMovieLanguage] = useState<
    MoviesProps[] | undefined
  >();

  const [vote, setVote] = useState<MoviesProps[] | undefined>();

  useEffect(() => {
    params.page &&
      MoviesCall.get(
        `${params.page}?api_key=${process.env.REACT_APP_API_KEY}`,
        {}
      ).then((res) => {
        setMovies(res.data.results);
      });
  }, [params]);

  useEffect(() => {
    const filteredMovies =
      movies &&
      movies.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );

    setResults(filteredMovies);
  }, [value, movies]);

  useEffect(() => {
    const filteredMovieLanguage =
      movies && movies.filter((item) => item.original_language === language);
    setMovieLanguage(filteredMovieLanguage);
  }, [language, movies]);

  const handleSelect = (val: string) => {
    setLanguage(val);
  };

  const handleSort = () => {
    const sortMovies =
      movies &&
      movies.sort((a, b) => (a.vote_average > b.vote_average ? -1 : 1));
    setVote(sortMovies);
  };

  <div className="dropdown_filter">
    <Select
      defaultValue={"Select"}
      className="select"
      onChange={handleSelect}
      value={language}
      style={{ marginTop: 14, marginLeft: 10, width: 100 }}
      options={Array.from(
        new Set(movies && movies.map((item) => item.original_language))
      ).map((movielanguage) => {
        return {
          value: movielanguage,
          label: movielanguage.toUpperCase(),
        };
      })}
    />
  </div>;

  return (
    <div className="upcoming_container">
      <MoviesFilter
        value={value}
        setValue={(inputValue: string) => setValue(inputValue)}
      />
      <div className="dropdown_filter">
        <Select
          className="select"
          placeholder="Select"
          onChange={handleSelect}
          value={language}
          style={{ marginTop: 14, marginLeft: 10, width: 100 }}
          options={Array.from(
            new Set(movies && movies.map((item) => item.original_language))
          ).map((movielanguage) => {
            return {
              value: movielanguage,
              label: movielanguage.toUpperCase(),
            };
          })}
        />
      </div>
      <div className="vote_sort">
        <Button
          type="primary"
          onClick={handleSort}
          style={{ marginTop: 14, marginLeft: 50, width: 130 }}
        >
          Order Movies
        </Button>
      </div>
            
      <ContentLayout
        movies={value ? results : movies && language ? movielanguage : movies}
      />
    </div>
  );
};
