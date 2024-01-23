//компонент MovieDetails, сторінка з детальною інформацією про кінофільм.

import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

const MovieDetails = ({movies}) => {
  return (<div>
    <Cast movies={movies} />
    <Reviews/>
  </div>);
};

export default MovieDetails;
