//компонент MovieDetails, сторінка з детальною інформацією про кінофільм.

import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

const MovieDetails = ({ filmById }) => {
  
  return (<div>
    <h1>{filmById.title}</h1>
    <Cast filmById={filmById} />
    <Reviews/>
  </div>);
};

export default MovieDetails;
