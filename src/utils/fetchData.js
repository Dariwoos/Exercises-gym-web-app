// Options for fetching exercises data
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': "c3d86acfa1msh70d2e451dec442ep1d1251jsnf96883fa7023",
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

// Options for fetching YouTube data
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'c3d86acfa1msh70d2e451dec442ep1d1251jsnf96883fa7023',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

// Fetch data from the given URL with the specified options
export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {  // Check if response is not in the range 200-299
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;  // Rethrow the error after logging it
  }
};

// Example test function to verify the fetch request works as expected
const testFetch = async () => {
  const url = 'https://exercisedb.p.rapidapi.com/status';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'c3d86acfa1msh70d2e451dec442ep1d1251jsnf96883fa7023',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error('Error during fetch:', error);
  }
};

// Run the test function (you can remove this in your actual application)
testFetch();
