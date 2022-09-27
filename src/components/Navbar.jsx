import React from 'react'
import {Stack} from '@mui/material' //..importing Stack component from MUI for the Navbar row 
import {Link} from 'react-router-dom'
import {logo} from './utils/constants'
import {SearchBar} from './index'

//...Using instant return in the const
const Navbar = () => (
  //...Stack component first..
    <Stack direction="row" alignItems="center"
     p={2} //..padding 
     sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}>

      {/* inplementing the Navbar */}
      <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar/>
    </Stack>
)
  
  export default Navbar