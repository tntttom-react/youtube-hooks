import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    //TODO: Make sure we call callback from parent component
    onFormSubmit(searchTerm);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={handleFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
