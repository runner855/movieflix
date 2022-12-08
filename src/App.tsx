import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { LanguageEnum, AppUrls } from "./types/Apptypes";
import { MovieDetails } from "./components/MovieDetails/MovieDetails";
import { PageStructure } from "./components/PageStructure/PageStructure";

export const App = () => {
  const [languages, setLanguages] = useState<LanguageEnum>(LanguageEnum.EN);
  return (
    <div className="App">
      <NavBar
        languages={languages}
        setLanguage={(lang: LanguageEnum) => setLanguages(lang)}
      />

      <Routes>
        <Route path="/" element={<Navigate to={AppUrls.UPCOMING} />} />
        <Route path="/:page" element={<PageStructure />} />
        <Route path="/MovieDetails/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
