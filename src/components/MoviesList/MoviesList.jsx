import './MoviesList.css';

import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from '../MovieCard/MovieCard';

const MoviesList = (props) => {
  const { movies } = props;

  const createMovieCards = () => {
    const movieCards = movies.map((el) => (
      <li key={el.id} className="movie-list__item">
        <MovieCard
          title={el.original_title}
          overview={el.overview}
          poster={el.poster_path}
          releaseDate={el.release_date}
          rating={el.vote_average}
        />
      </li>
    ));
    return movieCards;
  };

  return (
    <ul className="movies-list" type="none">
      {createMovieCards()}
    </ul>
  );
};

MoviesList.defaultProps = {
  movies: [{}],
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MoviesList;
