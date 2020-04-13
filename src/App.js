import React from 'react';
import PropTypes from 'prop-types';


const artist = [
  {
    id: 1,
    name: "DaBaby",
    url: "https://www.whosampled.com/static/track_images_200/lr197489_202041_221034314151.jpg",
    content: "Real Name: Jonathan Lyndale Kirk"
  },
  {
    id: 2,
    name: "The Weeknd",
    url: "https://www.whosampled.com/static/track_images_200/lr249803_2020123_111053337885.jpg",
    content: "Real Name: Abel Makkonen Tesfaye"
  },
  {
    id: 3,
    name: "Lil Peep",
    url: "https://www.whosampled.com/static/track_images_200/lr163643_2016105_13575657669.jpg",
    content: "Real Name: Gustav Åhr In Groups: GOTHBOICLIQUE"
  },
  {
    id: 4,
    name: "Kendrick Lamar",
    url: "https://www.whosampled.com/static/track_images_200/lr1536_2017414_112716284634.jpg",
    content: "Real Name: Kendrick Lamar Duckworth Aliases: K-Dot In Groups: Black Hippy"
  }
]



function ArtistList({name, url, content }){
  return <div>
    <h1>This is {name}</h1>
    <img src={url} alt={name}></img>
    <p>{content}</p>

  </div>
}

ArtistList.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}


class App extends React.Component {
  constructor(props){
    super(props)
    console.log("first");
  }
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({count: current.count + 1})
    );
  }

  minus = () => {
    this.setState(current => ({count: current.count - 1})
    );
  }
  componentDidMount(){
    console.log("third");
  }

  shouldComponentUpdate(){
    console.log("fourth")
    return true;
  }
  componentDidUpdate(){
    console.log("five")
  }
  render(){
    console.log("second");
    return (
    <div>
    <h1>count is : {this.state.count} </h1>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>
    </div>
    )
  }
}



export default App;
