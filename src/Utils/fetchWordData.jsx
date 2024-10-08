import axios from 'axios';

const fetchWordData = async (url, word) => {
  const options = {
    method: 'GET',
    url: url,
    params: { word },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
      'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data); // Log the full response
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchWordData;
