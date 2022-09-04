import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function ChannelCard({ channelDetail, marginTop }) {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "350px", md: "310px" },
        margin: "0 auto",
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginTop,
          }}
        >
          <CardMedia
            component="img"
            image={channelDetail?.snippet?.thumbnails?.high?.url}
            alt={channelDetail?.snippet?.title}
            sx={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              border: "1px solid #efefef",
            }}
          ></CardMedia>
          <Typography color="#efefef" variant="subtitle1">
            {channelDetail?.snippet?.title}
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
}
