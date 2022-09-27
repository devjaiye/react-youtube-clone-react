import {useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import SideBar from './SideBar'


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

    </Stack>
  )
}

export default Feed