import React, { useState, useEffect } from "react";
import { Stack, Box, Typography, TextField } from "@mui/material";
import ReactPlayer from "react-player";
import { useParams, Link } from "react-router-dom";
import fetchFromAPI from "../utils/fetchFromAPI";
import Videos from "./Videos";

export default function VideoDetails() {
  const [videoDetails, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  const [toggleText, setToggleText] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetails(data.items[0]);
    });

    fetchFromAPI(`search?part=snippet&relatedVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetails?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle, description },
    statistics: { likeCount, viewCount },
  } = videoDetails;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box
          flex={2}
          p={2}
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <ReactPlayer
            className="react-player"
            url={`http://www.youtube.com/watch?v=${id}`}
            controls
          />
          <Typography color="#fff" variant="h5" fontWeight="bold">
            {title}
          </Typography>
          <Stack direction="row" justifyContent="space-between">
            <Link to={`/channel/${channelId}`}>
              <Typography variant="subtitle2" color="#efefef">
                {channelTitle}
              </Typography>
            </Link>
            <Stack
              direction="row"
              spacing={2}
              sx={{ color: "#efefef", opacity: "0.7" }}
            >
              <Typography>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography>
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Stack>
          <Typography variant="subtitle2" color="#efefef" sx={{}}>
            {toggleText ? description : description.slice(0, 50)}...
            <button
              className="show-more"
              onClick={() => setToggleText((prevState) => !prevState)}
            >
              {toggleText ? "Show Less" : "Show More"}
            </button>
          </Typography>
          <Stack direction="column">
            <TextField
              label="Add Comment"
              variant="filled"
              sx={{
                background: "#efefef",
                border: "none",
                mt: 3,
                outline: "none",
              }}
            />
          </Stack>
        </Box>
        <Box flex={1} p={2}>
          <Typography color="#efefef" mb={3} fontWeight="bold">
            Related Videos
          </Typography>
          <Videos videos={videos} />
        </Box>
      </Stack>
    </Box>
  );
}
