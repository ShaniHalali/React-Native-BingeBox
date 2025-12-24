
import {MovieModel} from '../../models/movieModel'

export const mapRowMoviesToModel = (rawMoviesArray) => {
    return rawMoviesArray.map((movie) => new MovieModel({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        overview: movie.overview,
        vote_average: movie.vote_average,
    }))
}