import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchWord, setSearchWord] = useState("");

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (searchWord) {
      navigate(`/search/${searchWord}`);
      setSearchWord("");
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        alignItems: "center",
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
      }}
    >
      <input
        placeholder="Search..."
        className="search-bar"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <IconButton type="submit" sx={{ color: "red" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
