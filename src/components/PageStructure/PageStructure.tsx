import React, { useEffect, useState } from "react";
import MoviesCall from "../../api/MoviesCall";
import { MoviesProps } from "../../types/Apptypes";
import "../PageStructure/PageStructure.css";
import { useParams } from "react-router-dom";
import { MoviesFilter } from "../MoviesFilter/MoviesFilter";
import { ContentLayout } from "../ContentLayout/ContentLayout";
import { Select } from "antd";

export const PageStructure = () => {
  const params = useParams();

  const [movies, setMovies] = useState<MoviesProps[] | undefined>();
  const [value, setValue] = useState<string>("");
  const [results, setResults] = useState<MoviesProps[] | undefined>();
  const [language, setLanguage] = useState("");
  const [movielanguage, setMovieLanguage] = useState<
    MoviesProps[] | undefined
  >();

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

  const handleSelect = (val: string) => {
    setLanguage(val);
  };

  useEffect(() => {
    const filteredMovieLanguage =
      movies && movies.filter((item) => item.original_language === language);
    setMovieLanguage(filteredMovieLanguage);
  }, [language, movies]);

  return (
    <div className="upcoming_container">
      <MoviesFilter
        value={value}
        setValue={(inputValue: string) => setValue(inputValue)}
      />
      <div className="dropdown_filter">
        <Select
          className="select"
          defaultValue="Select"
          onChange={handleSelect}
          value={language}
          style={{ marginTop: 14, marginLeft: 10, width: 100 }}
          options={Array.from(
            new Set(movies && movies.map((obj) => obj.original_language))
          ).map((period) => {
            return {
              value: period,
              label: period.toUpperCase(),
            };
          })}
        />
      </div>
            
      <ContentLayout
        movies={value ? results : movies && language ? movielanguage : movies}
      />
    </div>
  );
};
