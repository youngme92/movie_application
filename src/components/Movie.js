import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({
    id,
    url,
    title,
    year,
    summary,
    poster,
    genres
}) {
    return ( 
    <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <a className="movie__url" href={url}>{url}</a>
            <ul className="movie__genres">{
                    genres.map(
                        (gener, index) => <li key={index} className="genres_genre">{gener}</li>
                    )
                }</ul>
            
            <p className="movie__summary">{summary.slice(0, 80)}...</p>
        </div>
    </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;