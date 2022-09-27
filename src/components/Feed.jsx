import {useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import {SideBar, Videos} from './'
import {fetchAPI} from './utils/fetchAPI'


//..The feed will contain 2 parts. The side  (left side) and video field on the left side
const Feed = () => {

  //..using useState hook
  const [selectedCategory, setselectedCategory] = useState('New')
  
  //..useEffect is a lifecycle hook which gets called whenever our component loads 
  useEffect(() =>{
    //..wrap it in a template string to make it dynamic
    fetchAPI(`search?part=snippet&q=${selectedCategory}`)
  }, [selectedCategory])
  
  return (
    <Stack sx={{flexDirection: {
      sx: 'column', md: 'row' }}}>
        <Box sx={{height: { sx: 'auto', md: '92vh'},
        borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}
      }}>
        {/* goto different category when btn is clicked */}
        <SideBar 
          selectedCategory = {selectedCategory}
          setselectedCategory = {setselectedCategory}
          />

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
        {selectedCategory} <span style={{ color: '#F31503'}}>Videos</span>
          </Typography>
          <Videos videos={[]}/>
        </Box>
    </Stack>
  )
}

export default Feed