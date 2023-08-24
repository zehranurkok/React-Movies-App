import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";

import IconSearch from './assets/search.svg';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function App() {
  
  // Use of Hooks
  const [types, setTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  

  useEffect(() => { 
    document.title = 'Movies and TV Shows';
    searchNames('Avengers');
  }, []);

  // We combine the OMDb API URL and the custom Key that we will add to the .env file. 
  // You can add the .env file to the root.
  const API_URL = 'http://www.omdbapi.com?apikey=' + import.meta.env.VITE_API_KEY;

  // To search by name and year, we perform the following steps.
  const searchNames = async (title: any) => {
    const responseName = await fetch(`${ API_URL }&s=${ title }`);
    const data = await responseName.json();
    const totalResults = setTypes(data.Search.totalResults);
    setTypes(data.Search);
    console.log(data.Search);
  }

  // We add the components and perform the necessary steps to search.
  return <div>
    <Header heading="Movies and TV Shows"/>

    <div>
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
          onClick={ () => searchNames(searchTerm)}
        />
      </div>
    </div>
    </div>

    {
      types?.length > 0 && ( 
          <div className="container"> 
              { types.map((type) => (<Card type = { type } /> )) } 
          </div> )
    }

    <Pagination className="pagination" count={10} showFirstButton showLastButton />

    <Footer footer="Movies and TV Shows App created by Zehra Nur Kök © "/>
    </div>
}

export default App;