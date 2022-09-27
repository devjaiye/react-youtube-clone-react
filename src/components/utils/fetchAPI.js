import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search'

//..options object pasted from RapidAPI
const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  }

  //..Whatever request we make we are going to start from the BASE_URL
  //..This function allow us to fetch our API and call it dynamically into our app
  
  export const fetchApi = async(url) => {
    const  {data} = await axios.get(`${BASE_URL}/${url}`, 
    options)

    return data
  }