import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchFromAPI from "../utils/fetchFromAPI";
import Videos from "./Videos";

export default function Feed() {
  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "95vh", flex: "2" }}>
      <Typography
        textAlign="center"
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{ color: "white" }}
      >
        {" "}
        Search Results for {searchTerm}
        <small style={{ color: "#fc1503" }}>Videos</small>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
}
