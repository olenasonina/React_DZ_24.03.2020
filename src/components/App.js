import React from "react";
import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myMovies: [],
      willWatch: []
    }
  }

  componentDidMount() {
    fetch("http://cors-anywhere.herokuapp.com/" + "https://api.themoviedb.org/3/discover/movie?api_key=3f4ca4f3a9750da53450646ced312397&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
        .then((response) => {
          console.log("then");
          return response.json()
         }).then((data) => {
         console.log("data", data)
         this.setState(
             {myMovies: data.results}
    )
    })
  }

  removeMyMovie = myMovie => {
    const newMovies = this.state.myMovies.filter(function(item) {
       return item.id !== myMovie.id;
    });
    this.setState(
      {myMovies: newMovies}
    );
  };

  addMyMovie = myMovie => {
    const newWillWatch = [...this.state.willWatch];
    newWillWatch.push(myMovie);
    this.setState(
        {willWatch: newWillWatch}
        );
  };

  removeMyMovieFromWillWatch = myMovie => {
    const newRemoveMovies = this.state.willWatch.filter(function(item) {
      return item.id !== myMovie.id;
    });
    this.setState(
        {willWatch: newRemoveMovies}
    );
  };

  render() {
  return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this.state.myMovies.map( myMovie => {
                return(
                    <div className="col-6 mb-4" key={myMovie.id}>
                        <MovieItem myMovie={myMovie} removeMyMovie={this.removeMyMovie} addMyMovie={this.addMyMovie} removeMyMovieFromWillWatch={this.removeMyMovieFromWillWatch} />
                    </div>
                    );
              })}
            </div>
          </div>
          <div className="col-3">
            <p>Will watch: {this.state.willWatch.length}</p>
            <ul className="list-group">
            {this.state.willWatch.map( myMovie => {
              return (
                  <li key={myMovie.id} className="list-group-item">
                    <div className="d-flex justify-content-between">
                      <p>{myMovie.title}</p>
                      <p>{myMovie.vote_average}</p>
                    </div>
                  </li>
              )
            })}
            </ul>
          </div>
        </div>
      </div>

  )
  }
}



// function removeMovie (movie) {
//   console.log("/// removeMovie");
//   console.log(this, "MOVIE single", movie);

//   const updateMovies = this.state.movies.filter(function (item) {
//     return item.id  !== movie.id;
//   })
//   console.log(updateMovies);
//   this.setState({
//     movies: updateMovies
//   })
// }

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       movies: moviesData,
//       moviesWillWatch: []
//     };

//     // this.removeMovie = this.removeMovie.bind(this);
//   }

//   render() {
//     console.log("--- App ---");
//     console.log("App render", this.state);
//     // console.log("App this", this.state.movies[1].title);
//     return (
//       <div className="container">
//         <div className="row">
//           <MovieList movies={this.state.movies} appThis = {this}/>
//           <div className="col-4 col-sm-3 mt-4">
//             <h4>Will Watch: {this.state.moviesWillWatch.length} movies</h4>
//             <ul className="list-group">
//               <li className="list-group-item">
//                 <div className="d-flex justify-content-between">1111 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// class MovieList extends React.Component {
//   render() {
//     const { movies, appThis } = this.props;
//     console.log("--- MovieList ---");
//     // console.log(this.props);
//     // console.log("MovieList movies", movies, removeMovie);
//     return (
//       <div className="col-8 col-sm-9">
//         <div className="row">
//           {movies.map(function(movie) {
//             return (
//               <div className="offset-1 col-10 offset-sm-0 col-sm-6 mt-4" key={movie.id}>
//                 <MovieItem movie={movie} removeMovie={removeMovie} appThis = {appThis} />
//               </div>
//             );
//           }, this)}
//         </div>
//       </div>
//     );
//   }
// }



export default App;
