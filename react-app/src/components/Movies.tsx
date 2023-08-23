import { useEffect } from "react";

const API_URL = 'http://www.omdbapi.com?apikey=5f835cf2';

function Movies() {
    
    const searchMovies = async (title: any) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
      searchMovies('Spiderman');
    }, []);
    
  return (
    <>
        
    </>
  );
}

export default Movies;
