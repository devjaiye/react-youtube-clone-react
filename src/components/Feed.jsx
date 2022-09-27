import {useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import {SideBar, Videos} from './'


//..The feed will contain 2 parts. The side  (left side) and video field on the left side
const Feed = () => {
  return (
    <Stack sx={{flexDirection: {
      sx: 'column', md: 'row' }}}>
        <Box sx={{height: { sx: 'auto', md: '92vh'},
        borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}
      }}>
        <SideBar/>

        {/* Typography is used for all text components instead of using p tag */}
        <Typography className='copyright' variant='body2'
          sx={{mt: 1.5, color: '#fff'}}>
            Copyright 2022 goNativeTech
          </Typography>
        </Box>

        {/* Video Feed Title */}
        <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}> 
          <Typography variant='h4' fontWeight='bold'
           mb={2} sx={{ color:'white'}}>
          New <span style={{ color: '#F31503'}}>Videos</span>
          </Typography>
          <Videos videos={[]}/>
        </Box>
    </Stack>
  )
}

export default Feed