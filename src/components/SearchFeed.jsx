import { Box, Typography } from '@mui/material'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import { Videos} from './'
import {fetchAPI} from './utils/fetchAPI'


//..The SearchFeed will contain 2 parts. The side  (left side) and video field on the left side
const SearchFeed = () => {

  //..using useState hook
  const [videos, setVideos] = useState([ ])
  const {searchTerm} = useParams();

  //..useEffect is a lifecycle hook which gets called whenever our component loads 
  useEffect(() =>{
    //..wrap it in a template string to make it dynamic
    //.. .then() will return the async function fetchAPI when called   
    fetchAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  }, [searchTerm])
  
  return (
        <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
            <Typography variant='h4' fontWeight='bold'
           mb={2} sx={{ color:'white'}}>
            Your Search Results for: 
             <span style={{ color: '#F31503'}}> {searchTerm}</span> Videos
          </Typography>
          <Videos videos={videos}/>
        </Box>
  )
}

export default SearchFeed