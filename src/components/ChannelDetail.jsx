import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {fetchAPI} from './utils/fetchAPI'
import {ChannelCard, Videos} from './'

const ChannelDetail = ({marginTop}) => {
  const [channelDetail, setChannelDetail] = useState([])
  const [videos, setVideos] = useState([])
  const {id} = useParams()

  useEffect(()=> {
    fetchAPI(`channels?part=snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items[0]))

    //..fetch channel vides  
    fetchAPI(`search?channelId=${id}&part=snippet&
      order=date`)
    .then((data)=> setVideos(data?.items))

  }, [id])

  // console.log(channelDetail, videos)

   return (
    <Box minHeight="95vh"> 
      <Box> 
        <div style={{ 
          background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,18,60,1) 50%, rgba(153,29,115,1) 100%)",
          zIndex: 10, height: '300px'
        }}/>
        <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr: {sm: '100px'}}}/> 
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail