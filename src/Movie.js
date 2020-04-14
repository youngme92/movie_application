import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({
    id,
    url,
    title,
    year,
    summary,
    poster
}) {
    return <div class="movie">
        <img src={poster} alt={title} title={title}></img>
        <div>
            <h3>{title}</h3>
            <h5>{year}</h5>
            <a href={url}>{url}</a>
            <p>{summary}</p>
        </div>
    </div>

}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;