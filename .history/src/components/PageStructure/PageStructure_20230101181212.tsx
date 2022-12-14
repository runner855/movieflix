import React, { useEffect, useState } from "react";
import MoviesCall from "../../api/MoviesCall";
import { MoviesProps } from "../../types/Apptypes";
import "../PageStructure/PageStructure.css";
import { useParams } from "react-router-dom";
import { MoviesFilter } from "../MoviesFilter/MoviesFilter";
import { ContentLayout } from "../ContentLayout/ContentLayout";
import { Button, Select } from "antd";

export const PageStructure = () => {
  const params = useParams();

  const [movies, setMovies] = useState<MoviesProps[] | undefined>();
  const [value, setValue] = useState<string>("");
  const [language, setLanguage] = useState<string>();
  const [vote, setVote] = useState<boolean>(false);

  useEffect(() => {
    params.page &&
      MoviesCall.get(
        `${params.page}?api_key=${process.env.REACT_APP_API_KEY}`,
        {}
      ).then((res) => {
        setMovies(res.data.results);
      });
  }, [params]);

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
          onChange={(val: string) => setLanguage(val)}
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
          onClick={() => setVote(!vote)}
          style={{ marginTop: 14, marginLeft: 50, width: 130 }}
        >
          Order Movies
        </Button>
      </div>
            
      <ContentLayout
        movies={movies}
        language={language}
        value={value}
        vote={vote}
      />
    </div>
  );
};
