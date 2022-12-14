import {Typography} from "@mui/material";
import {Stack, Box} from "@mui/system";
import React, {useEffect, useState} from "react";
import SideBar from "./SideBar";
import fetchFromAPI from "../utils/fetchFromAPI";
import Videos from "./Videos";

export default function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
      .catch((err) => console.log(err));
  }, [selectedCategory]);

  return (
    <Stack sx={{flexDirection: {sx: "column", md: "row"}}}>
      <Box
        sx={{
          height: {sx: "auto", md: "92vh"},
          borderRight: "1px solid #3d3d3d",
          px: {sx: 0, md: 2},
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className="copyright" variant="body2" sx={{color: "#fff"}}>
          Copyright 2022 FK Media
        </Typography>
      </Box>

      <Box p={2} sx={{overflowY: "auto", height: "95vh", flex: "2"}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: "white"}}>
          {selectedCategory}
          <small style={{color: "#fc1503"}}>Videos</small>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}
