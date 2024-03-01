// src/utils/api.js
const fetchMoreProfiles = async (page) => {
    // Simulate fetching data from an API
    const response = await fetch(`/api/profiles?page=${page}`);
    const data = await response.json();
    // Return a subset of data for simulation
    return data.slice(2, 5); // Return profiles 2, 3, and 4
  };
  
  export default fetchMoreProfiles;
  