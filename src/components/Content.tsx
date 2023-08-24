function Content({ type, onClose }: { type: any; onClose: () => void }) {
    return (
      <>
      <div className="content">
        <div className="content__area">
        <div className="content__img">
           <img src={ type.Poster !== 'N/A' ? type.Poster : 'https://via.placeholder.com/400'} alt={ type.Title }/>
        </div>

        <div  className="content__text">
           <h1>{ type.Title }</h1>
           <span>{ "Type: " + type.Type.toUpperCase() }</span>
           <span>{ "Release Year: " + type.Year }</span>
           <span>{ "imdbID: " + type.imdbID }</span>
           <button onClick={onClose}>Close</button>
        </div>
        </div>

      </div>
      </>
    );
  }
  
  export default Content;
