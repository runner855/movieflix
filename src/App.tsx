import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Upcoming } from "./components/Upcoming/Upcoming";
import { LanguageEnum, AppUrls } from "./types/Apptypes";
import { TopRated } from "./components/TopRated/TopRated";
import { Popular } from "./components/Popular/Popular";

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
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </div>
  );
};
