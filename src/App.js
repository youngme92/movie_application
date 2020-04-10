import React from 'react';

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

function App() {
  return (
    <div>
      Hi
      {artist.map(function(artist){
        return <ArtistList key={artist.id} name={artist.name} url={artist.url} content={artist.content} />
        
      })}
    </div>
  );
}

export default App;
