
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";

import IconSearch from './assets/search.svg';

function App() {
  
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => { searchMovies('Batman'); }, []);

  const API_URL = 'http://www.omdbapi.com?apikey=5f835cf2';

  const searchMovies = async (title: any) => {
    const responseTitle = await fetch(`${ API_URL }&s=${ title }`);
    const data = await responseTitle.json();
    setMovies(data.Search);
  }

  return <div>
    
    <Header heading="Movies and TV Shows"/>

    <div className="search">
      <div>
        <input 
          type="text" 
          className="search__input"
          placeholder="Search"
          value={ searchTerm }
          onChange={ (event) => setSearchTerm(event.target.value) }
        />
      </div>
      <div className="search_icon">
        <img 
          src={ IconSearch } 
          alt="search" 
          onClick={ ()=> searchMovies(searchTerm)}
        />
      </div>
    </div>

    {
      movies?.length > 0 && ( <div className="container"> { movies.map((movie) => (<Card movie = { movie }/>)) } </div> )
    }

    <Footer footer="Zehra Nur Kök © "/>
    
    </div>
}

export default App;