
import {MovieModel} from '../../models/movieModel'

export const mapRowMoviesToModel = (rawMoviesArray) => {
    return rawMoviesArray.map((movie) => new MovieModel({
        id: movie.id,
        title: movie.title,
        poster: movie.poster,
        overview: movie.overview,
        vote_average: movie.vote_average,
    }))
}