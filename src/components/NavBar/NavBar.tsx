import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MoviesCall from "../../api/MoviesCall";
import { AppUrls, LanguageEnum, MoviesProps } from "../../types/Apptypes";
import { NavBarElements } from "../../Utilities/utility";
import { MoviesFilter } from "../MoviesFilter/MoviesFilter";
import "../NavBar/NavBar.css";

type NavBarProps = {
  languages: LanguageEnum;
  setLanguage: (languages: LanguageEnum) => void;
};

export const NavBar = ({ languages }: NavBarProps) => {
  const [filterData, setFilterData] = useState<MoviesProps[] | undefined>();

  useEffect(() => {
    MoviesCall.get(
      `${AppUrls.UPCOMING}?api_key=${process.env.REACT_APP_API_KEY}`,
      {}
    ).then((res) => {
      setFilterData(res.data.results);
    });
  }, []);

  return (
    <ul className="navbar_container">
      {NavBarElements.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.to}>{item.navbar_element[languages]}</Link>
          </li>
        );
      })}
    </ul>
  );
};
