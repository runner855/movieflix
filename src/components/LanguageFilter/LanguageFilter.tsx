import React, { useState } from "react";
import { Select } from "antd";
import { Movieslanguages } from "../../Utilities/utility";
import "../LanguageFilter/LanguageFilter.css";

export const LanguageFilter = () => {
  const handleChange = (langvalue: string) => {
    console.log(langvalue);
  };
  return (
    <div>
      <Select
        className="select"
        defaultValue="Select"
        options={Movieslanguages}
        onChange={handleChange}
      />
    </div>
  );
};
