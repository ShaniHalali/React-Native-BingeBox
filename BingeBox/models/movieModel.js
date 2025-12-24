export class MovieModel {
  constructor({ id, title, poster_path, overview, vote_average }) {
    this.id = id
    this.title = title
    this.poster = `https://image.tmdb.org/t/p/w500${poster_path}` 
    this.overview = overview
    this.voteAverage = vote_average
  }
}