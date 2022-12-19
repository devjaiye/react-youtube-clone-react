import axios from 'axios'

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

//..options object pasted from RapidAPI
const options = {
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': "b976c1aa25msh0532909a2defa22p1a28fdjsne4b290ad3456",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    }
  }

  //..Whatever request we make we are going to start from the BASE_URL
  //..This function allow us to fetch our API and call it dynamically into our app

  export const fetchAPI = async(url) => {
    const  {data} = await axios.get(`${BASE_URL}/${url}`, options)

    return data
  }