import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import fetchFromAPI from "../utils/fetchFromAPI";
import ChannelCard from "./ChannelCard";

import banner from "../utils/banner.jpg";
import Videos from "./Videos";
import { Stack } from "@mui/system";

export default function ChannelDetails() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  // const {
  //   brandingSettings: {
  //     channel: { title, desription },
  //     image: { bannerExternalUrl },
  //   },

  //   snippet: {
  //     thumbnails: {
  //       high: { url },
  //     },
  //   },
  //   statistics: { subscriberCount, videoCount },
  // } = channelDetail;

  console.log(channelDetail);

  return (
    <Box minHeight="95vh">
      <Box>
        <img src={banner} alt="banner" height="300px" width="100%" />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}
