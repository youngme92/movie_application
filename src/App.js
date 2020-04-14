import React from 'react';
import axios from 'axios';
import Movie from './Movie';



class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
// movies를 movies 한개만 둬도 가능
  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json")
    this.setState({movies : movies, isLoading: false})
  }

  componentDidMount(){
    console.log("movies update!")
    this.getMovies();
  }

  componentDidUpdate(){
    console.log(this.state.movies)
  }
  render(){
    const {isLoading, movies} = this.state;
  return <div>{isLoading ? "Loading..." : movies.map(movies => {
    console.log(movies)
    return <Movie key={movies.id} id={movies.id} url={movies.url} title={movies.title} year={movies.year} summary={movies.summary} poster={movies.medium_cover_image} />
  })}</div>
  }
}



export default App;
