import React, { useState } from "react";
import { Stack, Box, CardMedia } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos }) => {
  // if(!videos?.length) return <Loader />;
  
  return (
    <Stack flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}> 
      {videos.map((item, idx) => (
        <Box key={idx}> 
           {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />} 
          </Box>
      ))}
    </Stack>
  );
}

export default Videos