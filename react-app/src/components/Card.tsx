
function Card({type}: {type:any}) {
    
  return (
    <>
      <div className="card" key={type.i}>

        <div className="card__title">
          <span>{ type.Year }</span>
          <h3>{ type.Title }</h3>
        </div>

        <div className="card__img">
          <img src={ type.Poster !== 'N/A' ? type.Poster : 'https://via.placeholder.com/400'} alt={ type.Title }/>
        </div>

        <div className="card__context">
          <span>{ type.Type.toUpperCase() }</span>
        </div>

        <div className="card__imdb">
          <p>{ type.imdbRating }</p>
        </div>
      </div>

    </>
  );
}

export default Card;
