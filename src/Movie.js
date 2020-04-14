import React from 'react';
import PropTypes from 'prop-types';

function Movie({id, url, title, year, summary, poster }){
    return <h5>{title}</h5>
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