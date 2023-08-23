
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";

import IconSearch from './assets/search.svg';

function App() {
  
  const [types, setTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => { searchTypes('Batman'); }, []);


  const API_URL = 'http://www.omdbapi.com?apikey=' + import.meta.env.VITE_API_KEY;

  const searchTypes = async (title: any) => {
    const responseTitle = await fetch(`${ API_URL }&s=${ title }`);
    const data = await responseTitle.json();
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
          onClick={ ()=> searchTypes(searchTerm)}
        />
      </div>
    </div>

    {
      types?.length > 0 && ( <div className="container"> { types.map((type) => (<Card type = { type }/>)) } </div> )
    }

    <Footer footer="Zehra Nur Kök © "/>
    
    </div>
}

export default App;