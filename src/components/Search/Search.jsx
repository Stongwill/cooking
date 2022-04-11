import React from "react";
import { useState } from "react";

export default function Search({ value }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    value(search);
  };
  const handleKeySearch = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search">
      <input
        type="search"
        name="search"
        placeholder="Search ..."
        value={search}
        onKeyDown={handleKeySearch}
        onChange={handleSearch}
      />
    </div>
  );
}
