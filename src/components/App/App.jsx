import "./App.css"

import React from "react";

import Filters from '../Filters/Filters'
import Search from '../Search/Search'
import MoviesList from '../MoviesList/MoviesList'


export default class App extends React.Component {
  
  state = {
    movies: [{adult: false,
      backdrop_path: "/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg",
      genre_ids:  [12, 28, 878],
      id: 11,
      original_language: "en",
      original_title: "Star Wars",
      overview: "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
      popularity: 136.575,
      poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
      release_date: "1977-05-25",
      title: "Star Wars",
      video: false,
      vote_average: 8.2,
      vote_count: 14898},
],
  }

  componentDidMount() {
    this.moviesRequest()
  }

  moviesRequest = async () => {
    let movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c33f54366ccf34ec81775c2d46bea63e&query=star wars`);
    movies = await movies.json()
    this.setState({movies: movies.results})
    // console.log(this.state)
  }



  render() {

    const {movies} = this.state

    return (
      <section className="app">
        <Filters />
        <Search />
        <MoviesList movies={movies} />
      </section>
    )
  }
}