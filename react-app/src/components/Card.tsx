
function Card({movie}: {movie:any}) {
    
  return (
    <>
      <div className="card" key={movie.i}>

        <div className="card__title">
          <span>{ movie.Year }</span>
          <h3>{ movie.Title }</h3>
        </div>

        <div className="card__img">
          <img src={ movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={ movie.Title }/>
        </div>

        <div className="card__context">
          <span>{ movie.Type.toUpperCase() }</span>
        </div>

        <div className="card__imdb">
          <p>{ movie.i }</p>
        </div>
      </div>

    </>
  );
}

export default Card;
