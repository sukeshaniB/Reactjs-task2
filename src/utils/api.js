const fetchMoreProfiles = async (page) => {
    const response = await fetch(`/api/profiles?page=${page}`);
    const data = await response.json();
    return data.slice(2, 5); 
  };
  
  export default fetchMoreProfiles;
  