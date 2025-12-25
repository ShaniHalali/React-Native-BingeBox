
import {MovieModel} from '../../models/movieModel'

export const mapRowMoviesToModel = (rawMoviesArray) => {
    return rawMoviesArray.map((movie) => ({
        id: movie.id,
        title: movie.title,
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        overview: movie.overview,
        vote_average: movie.vote_average,
    }))
}