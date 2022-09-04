import { Stack, Box } from "@mui/material";
import React from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

export default function Videos({ videos }) {
  if (!videos?.length) return "Loading...";

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={3}>
      {videos.map((video, index) => (
        <Box key={index}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}
    </Stack>
  );
}
