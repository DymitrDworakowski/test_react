// компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.

const Cast = ({movies}) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.release_date
}</h3>
          
        </li>
      ))}
    </ul>
  );
};

export default Cast;
