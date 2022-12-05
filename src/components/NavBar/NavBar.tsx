import * as React from "react";
import { Link } from "react-router-dom";
import { LanguageEnum } from "../../types/Apptypes";
import { NavBarElements } from "../../Utilities/utility";
import { MoviesFilter } from "../MoviesFilter/MoviesFilter";
import "../NavBar/NavBar.css";

type NavBarProps = {
  languages: LanguageEnum;
  setLanguage: (languages: LanguageEnum) => void;
};

export const NavBar = ({ languages }: NavBarProps) => {
  return (
    <ul className="navbar_container">
      {NavBarElements.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.to}>{item.navbar_element[languages]}</Link>
          </li>
        );
      })}
      <MoviesFilter />
    </ul>
  );
};
