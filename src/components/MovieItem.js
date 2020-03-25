import React from "react";

class MovieItem extends React.Component {
    constructor() {
        super();
        this.state = {
            myWillWatch: false
        }
    }
  render() {
    const { myMovie, removeMyMovie, addMyMovie, removeMyMovieFromWillWatch } = this.props;
    return (
        <div className="card">
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${myMovie.backdrop_path || myMovie.poster_path}`} alt={myMovie.title} />
           <div className="card-body">
               <h6 className="card-title">{myMovie.title}</h6>
               <div className="d-flex justify-content-between align-items-center">
                   <p className="mb-0">Rating: {myMovie.vote_average}</p>
                   {this.state.myWillWatch
                       ?
                       <button type="button"
                           className={this.state.myWillWatch ? "btn btn-success" : "btn btn-secondary"}
                           onClick = {() => {
                               console.log(myMovie);
                               {this.state.myWillWatch ? this.setState({myWillWatch: false}) : this.setState({myWillWatch: true})}
                               removeMyMovieFromWillWatch(myMovie);
                           }}
                        >
                       Remove will watch
                        </button>
                       :
                       <button type="button"
                           className={this.state.myWillWatch ? "btn btn-success" : "btn btn-secondary"}
                           onClick = {() => {
                               console.log(myMovie);
                               {this.state.myWillWatch ? this.setState({myWillWatch: false}) : this.setState({myWillWatch: true})}
                               addMyMovie(myMovie);
                           }}
                       >
                       Add will watch
                       </button>}
               </div>
               <button className="mb-4" type="button" onClick={removeMyMovie.bind(this, myMovie)}>Delete movie</button>
           </div>
        </div>
    )
  }
  
  
  
  // constructor() {
  //   super();

  //   this.state = {
  //     willWatch: false
  //   };
  // }
  // render() {
  //   console.log("--- MovieItem ---");
  //   const { movie, removeMovie, appThis } = this.props;
  //   // console.log("appThis", appThis, "single movie", movie);
  //   return (
  //     <div className="card">
  //       <img
  //         className="card-img-top"
  //         src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
  //           movie.poster_path}`}
  //         alt=""
  //       />
  //       <div className="card-body">
  //         <p> {this.state.willWatch ? "NOT will" : "will"} </p>
  //         <h6 className="card-title">{movie.title}</h6>
  //         <div className="d-flex justify-content-between align-items-center">
  //           <p className="mb-0">Rating: {movie.vote_average}</p>
  //         </div>

  //         <div className="d-flex justify-content-end align-items-center mt-3">
  //           <button
  //             type="button"
  //             className="btn btn-info btn-sm"
  //             onClick={() => {
  //               console.log("Clickkk", this.state.willWatch);
  //               this.state.willWatch
  //                 ? this.setState({
  //                     willWatch: false
  //                   })
  //                 : this.setState({
  //                     willWatch: true
  //                   });
  //             }}
  //           >
  //             Will Watch
  //           </button>
  //           <button
  //             type="button"
  //             title="{movie.title}"
  //             className="btn btn-danger btn-sm mx-2"
  //           //   onClick={ () => {console.log(this)} }
  //             onClick={removeMovie.bind(appThis, movie) }
  //           //   onClick={removeMovie(this, movie) }
  //           >
  //             <span className="material-icons">delete_forever</span>
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
}

export default MovieItem;
