import React from "react";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {
  demoVideoTitle,
  demoVideoUrl,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/contants";

import {CheckCircle} from "@mui/icons-material";

export default function VideoCard({
  video: {
    id: {videoId},
    snippet,
  },
}) {
  return (
    <Card sx={{width: {xs: "100%", sm: "350px", md: "310px"}}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: {xs: "100%", sm: "350px", md: "310px"},
            height: "180px",
          }}
        ></CardMedia>
      </Link>
      <CardContent sx={{height: "100px", backgroundColor: "#1e1e1e"}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle2" color="#fff" fontWeight="bold">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" color="gray" fontWeight="bold" mt={1}>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle fontSize="10px" sx={{}} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}
