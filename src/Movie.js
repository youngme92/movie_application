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
    return <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <div>
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="movie_genres">{
                    genres.map(
                        (gener, index) => <li key={index} className="genres_genre">{gener}</li>
                    )
                }</ul>
            <a className="movie_url" href={url}>{url}</a>
            <p className="movie_summary">{summary}</p>
        </div>
    </div>

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