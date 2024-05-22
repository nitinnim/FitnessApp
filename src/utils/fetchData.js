export const exerciseOptions = {
    method: 'GET',
    params: {limit: '100'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '08e5c4de57msh7ca2cfc2dabde03p10c66cjsn2c6ea55bae14',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
}


export const fetchData = async (url,options) => {
  try{
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  }catch(e){
    console.log("Error in fetchin data ---> ",e);
  }
}