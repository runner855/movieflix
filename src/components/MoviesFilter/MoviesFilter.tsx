import React from "react";
import "../MoviesFilter/MoviesFilter.css";

type MoviesFilterProps = {
  value: string;
  setValue: (value: string) => void;
};

export const MoviesFilter = ({ value, setValue }: MoviesFilterProps) => {
  return (
    <div className="movies_filter">
      <input
        type="search"
        placeholder="Search..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};
