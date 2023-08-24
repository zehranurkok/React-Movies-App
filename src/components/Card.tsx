import { useState } from "react";
import Content from "./Content";

function Card({type}: {type:any}) {

  const [contentVisible, setContentVisible] = useState(false);
  
  return (
    <>
      {/* Card creation */}
      {contentVisible === true ? <Content onClose={() => setContentVisible(false)} type={type} /> 
        
      :<div className="card" key={type.imdbID}>

        <div className="card__title">
          <span>{ type.Year }</span>
          <h3>{ type.Title }</h3>
        </div>

        <div className="card__img">
          <img src={ type.Poster !== 'N/A' ? type.Poster : 'https://via.placeholder.com/400'} alt={ type.Title }/>
        </div>

        
        <div className="card__context" id={ type.imdbID }>
          <span>{ type.Type.toUpperCase() }</span>
        </div>
        
        <button onClick={() => setContentVisible(true)}>
          Content
        </button>

        

      </div>
        
      } 
      
    </>
  );
}

export default Card;
