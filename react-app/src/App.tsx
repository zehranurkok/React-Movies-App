
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";

import IconSearch from './assets/search.svg';

function App() {
  
  const [types, setTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => { 
    searchNames('Batman');
    document.title = 'Movies and TV Shows';
  }, []);


  const API_URL = 'http://www.omdbapi.com?apikey=' + import.meta.env.VITE_API_KEY;

  const searchNames = async (title: any) => {
    const responseName = await fetch(`${ API_URL }&s=${ title }`);
    const data = await responseName.json();
    setTypes(data.Search);
  }

  const searchYears = async (year: any) => {
    const responseYear = await fetch(`${ API_URL }&y=${ year }`);
    const data = await responseYear.json();
    setTypes(data.Search);
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
          onClick={ ()=> searchNames(searchTerm) || searchYears(searchTerm)}
        />
      </div>
    </div>

    {
      types?.length > 0 && ( <div className="container"> { types.map((type) => (<Card type = { type }/> ))} </div> )
    }

    <Footer footer="Zehra Nur Kök © "/>
    
    </div>
}

export default App;