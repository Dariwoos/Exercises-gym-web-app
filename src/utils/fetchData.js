export const exerciseOptions = {
  method: 'GET',
  //
  headers: {
    'X-RapidAPI-Key': "c3d86acfa1msh70d2e451dec442ep1d1251jsnf96883fa7023",
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c3d86acfa1msh70d2e451dec442ep1d1251jsnf96883fa7023',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


//url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',

export const fetchData = async(url, options)=>{
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}